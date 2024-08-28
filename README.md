# NextGame - Decide what to play next!

This React application allows users to select a random game from their Steam library. It uses the Steam API to fetch user data and display a random game from their collection.

## Features

- Enter your Steam profile link
- Fetch a random game from your library
- Display game image and title

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/steam-random-game-picker.git
   ```

2. Navigate to the project directory:
   ```
   cd steam-random-game-picker
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Steam API key:
   ```
   REACT_APP_STEAM_API_KEY=your_steam_api_key_here
   ```

   You can obtain a Steam API key from [Steam's Web API Documentation](https://steamcommunity.com/dev).

5. Start the development server:
   ```
   npm start
   ```

## Usage

1. Enter your Steam profile URL in the input field.
2. Click the arrow button or press Enter to submit.
3. The app will display a random game from your library.

## Warning

This project uses a CORS proxy to bypass CORS restrictions when making API requests. Please be aware that using a CORS proxy can have security implications and should not be used in a production environment without proper consideration and implementation of security measures.

## Technologies Used

- React
- Steam Web API

## Credits

- Steam logo and game images are property of Valve Corporation.
- Placeholder image and arrow icon sources should be credited here if they are not original assets.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This project is not affiliated with Valve or Steam. Use of the Steam Web API is subject to the [Steam Web API Terms of Use](https://steamcommunity.com/dev/apiterms).