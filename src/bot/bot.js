const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config();
const token = process.env.TOKEN;

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.on('error', (error) => {
    console.error('Client Error:', error);
});

client.login(token).catch(error => {
    console.error('Failed to login:', error);
});
