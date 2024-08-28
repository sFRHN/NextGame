import axios from 'axios';

const STEAM_API_KEY = import.meta.env.VITE_STEAM_API_KEY;
const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';

async function getSteamId(profileUrl) {
    const urlParts = profileUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2]; // Handle trailing slash
  
    if (lastPart.match(/^[0-9]+$/)) {
        return lastPart;
    } 
    else {
        try {
            const response = await axios.get(`${CORS_PROXY}http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/`, {
                params: {
                    key: STEAM_API_KEY,
                    vanityurl: lastPart
                }
            });
            
            if (response.data.response.success === 1) {
                return response.data.response.steamid;
            } 
            else {
                throw new Error('Failed to resolve vanity URL');
            }
        }
        catch (error) {
            console.error('Error details:', error.response ? error.response.data : error.message);
            throw new Error('Failed to resolve vanity URL: ' + error.message);
        }
    }
}

async function getOwnedGames(steamId) {

    try {
        const response = await axios.get(`${CORS_PROXY}http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`, {
            params: {
                key: STEAM_API_KEY,
                steamid: steamId,
                format: 'json',
                include_appinfo: 1
            }
        });
        
        return response.data.response.games;
    } 
    catch (error) {
        throw new Error('Failed to get owned games: ' + error.message);
    }
}

async function getGameDetails(appId) {

    try {
        const response = await axios.get(`https://store.steampowered.com/api/appdetails`, {
            params: {
                appids: appId
            }
        });
        
        return response.data[appId].data;
    } 
    catch (error) {
        throw new Error('Failed to get game details: ' + error.message);
    }
}

async function getRandomGame(profileUrl) {

    try {
      const steamId = await getSteamId(profileUrl);
      
      const ownedGames = await getOwnedGames(steamId);
      
      if (!ownedGames || ownedGames.length === 0) {
        throw new Error('No games found');
      }
      
      // Select and return a random game from the list
      const randomIndex = Math.floor(Math.random() * ownedGames.length);
      return ownedGames[randomIndex];
    } 
    catch (error) {
      throw new Error('Failed to get random game: ' + error.message);
    }
  }

export { getSteamId, getOwnedGames, getGameDetails, getRandomGame };