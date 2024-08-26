import React from 'react';
import './App.css';
import logoSteam from './assets/logo_steam.png';
import placeholder from './assets/placeholder.jpg';
import arrow from './assets/arrow-icon.png';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileInput />
      <GamePreview />
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

function ProfileInput() {
  return (
    <div className="profileInput">
      <h2>Enter Your Steam Profile Link</h2>
      <form id="profileForm">
        <input 
          type="text" 
          id="profileLink" 
          placeholder="https://steamcommunity.com/id/fr_hn/" 
          required 
        />
        <button type="submit">
          <img src={arrow} alt="Submit Arrow"/>
        </button>
      </form>
      <h3>Your profile should be set to public</h3>
    </div>
  );
}

function GamePreview() {
  return (
    <div className="gamePreview" id="gamePreview">
      <img src={placeholder} alt="Game Preview" id="gameImage" />
      <h3 id="gameTitle">Next Game</h3>
    </div>
  );
}

export default App;