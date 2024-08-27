import axios from 'axios';

const STEAM_API_KEY = process.env.STEAM_API_KEY;

async function getSteamId(profileUrl) {

    const urlParts = profileUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
  
    if (lastPart.match(/^[0-9]+$/)) {
      // If the last part is all numbers, it's already a Steam ID
      return lastPart;
    } 
    else {
        // If it's a vanity URL, need to resolve it
        try {
            const response = await axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/`, {
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
            throw new Error('Failed to resolve vanity URL: ' + error.message);
        }
    }
}

async function getOwnedGames(steamId) {

    try {
        const response = await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`, {
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