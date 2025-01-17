# Discord Joke Bot

## ✨ Introduction
The perfect discord bot for your server. Fill your discord with jokes.

This project consists of a webscrapper and a discord bot. The webscrapper goes on the web and finds jokes, the bot will then send a single joke on the discord server every single day. 

## 📝 Dependencies
- npm/yarn

## 📚 Documentation

### Setting up the bot
1. Clone the repository:
    ```
    git clone https://github.com/CaliberMan/Joke-Bot.git
    ```
2. Navigate to the project directory:
    ```
    cd Joke-Bot
    ```
3. Install the dependencies:
    ```
    npm install
    ```

### Configuration
Create a `.env` file in the root directory and add your Discord bot token:
```
BOT_TOKEN=your_discord_bot_token
```

### Running the bot
Start the bot with:
```
node src/bot/server.js
```

### Testing
Run the tests with:
```
npm test
```

## 🚀 Build System

To run the bot
```
node src/bot/server.js
```

To test the bot
```
npm test
```

## 📁 Project Structure

```
Joke-Bot/
├── src/
│   ├── bot/
│   │   ├── server.js
│   │   └── commands/
│   │       └── joke.js
│   ├── webscraper/
│   │   └── scraper.js
├── test/
│   ├── bot.test.js
│   └── scraper.test.js
├── .env
├── package.json
└── README.md
```

## 🔨 Progress
- ✅ Webscrapper
- ✅ Basic Bot

### What can it do
- ✅ Webscrape a website
- ✅ Send jokes on discord using /joke

### In development
- Host the bot on a server
- Move from a webscrapper to a joke api
- Read jokes from discord
- Add a reaction system to classify good and bad jokes


## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License
This project is licensed under the MIT License.