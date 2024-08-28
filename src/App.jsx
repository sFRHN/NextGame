import React, { useState } from 'react';
import './App.css';
import logoSteam from './assets/logo_steam.png';
import placeholder from './assets/placeholder.jpg';
import arrow from './assets/arrow-icon.png';
import { getRandomGame } from './steamAPI';


function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="App">
      <Header />
      <ProfileInput onGameSelect={setSelectedGame} />
      <GamePreview game={selectedGame} />
    </div>
  );
}


function Header() {
  return (
    <header className="header">
      <img src={logoSteam} alt="Steam Logo" />
    </header>
  );
}


function ProfileInput({ onGameSelect }) {
  const [profileLink, setProfileLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const randomGame = await getRandomGame(profileLink);
      onGameSelect(randomGame);
    } catch (error) {
      console.error('Error:', error.message);
      // You might want to display this error to the user
    }
  };

  return (
    <div className="profileInput">
      <h2>Enter Your Steam Profile Link</h2>
      <form id="profileForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="profileLink" 
          placeholder="https://steamcommunity.com/id/fr_hn/" 
          required 
          value={profileLink}
          onChange={(e) => setProfileLink(e.target.value)}
        />
        <button type="submit">
          <img src={arrow} alt="Submit Arrow"/>
        </button>
      </form>
      <h3>Your profile should be set to public</h3>
    </div>
  );
}


function GamePreview({ game }) {
  return (
    <div className="gamePreview" id="gamePreview">
      <img 
        src={game ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg` : placeholder} 
        alt="Game Preview" 
        id="gameImage" 
      />
      <h3 id="gameTitle">{game ? game.name : 'Next Game'}</h3>
    </div>
  );
}


export default App;