const fileUtils = require("../utils/utils");
const { Client, GatewayIntentBits } = require('discord.js');
const { CronJob } = require('cron');

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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== 'joke') return;

    const joke = fileUtils.giveAJoke();
    interaction.reply(joke);
})

// define channelName
const job = CronJob.from({
    cronTime: '* * * * * *',
    onTick: function () {
        client.channels.cache.find(channel => channel.name === channelName);
        const joke = fileUtils.giveAJoke();
        channel.send(joke);
	},
    start: true,
	timeZone: 'America/Los_Angeles'
});

client.login(token).catch(error => {
    console.error('Failed to login:', error);
});

