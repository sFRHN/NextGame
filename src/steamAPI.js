import axios from 'axios';


export async function getSteamId(profileUrl) {

    const urlParts = profileUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
  
    if (lastPart.match(/^[0-9]+$/)) {
      // If the last part is all numbers, it's already a Steam ID
      return lastPart;
    } 
    else {
      // If it's a vanity URL, need to resolve it
      const response = await fetch(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${STEAM_API_KEY}&vanityurl=${lastPart}`);
      const data = await response.json();

      if (data.response.success === 1) {
        return data.response.steamid;
      } 
      else {
        throw new Error('Failed to resolve vanity URL');
      }
    }
  }