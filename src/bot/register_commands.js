require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'joke',
        description: 'Replies with a joke',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash command');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands were registered');
        
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
