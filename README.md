# NextGame - Decide what to play next!

This React application allows users to select a random game from their Steam library. It uses the Steam API to fetch user data and display a random game from their collection.

## Features

- Enter your Steam profile link
- Fetch a random game from your library
- Display game image and title

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sFRHN/NextGame.git
   ```

2. Navigate to the project directory:
   ```
   cd NextGame
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Steam API key:
   ```
   VITE_STEAM_API_KEY==your_steam_api_key_here
   ```

   You can obtain a Steam API key from [Steam's Web API Documentation](https://steamcommunity.com/dev).

5. Start the development server:
   ```
   npm run dev
   ```

## Usage

1. Enter your Steam profile URL in the input field.
2. Click the arrow button to submit.
3. The page will display a random game from your library.

## Warning

This project uses a CORS proxy ([thingproxy](https://github.com/Freeboard/thingproxy)) to bypass CORS restrictions when making API requests. Please be aware that using a CORS proxy can have security implications and should not be used in a production environment without proper consideration and implementation of security measures.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Steam Web API

## Credits

- Steam logo and game images are property of Valve Corporation.
- [thingproxy](https://github.com/Freeboard/thingproxy)
- [Favicon](https://www.flaticon.com/free-icon/game-control_6875330?term=game&page=1&position=50&origin=search&related_id=6875330)
- [Image Placeholder - By RossPlaysAC - Own work, CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=90047884)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This project is not affiliated with Valve or Steam. Use of the Steam Web API is subject to the [Steam Web API Terms of Use](https://steamcommunity.com/dev/apiterms).