const fileUtils = require("../utils/utils");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { CronJob } = require('cron');

require('dotenv').config();
const token = process.env.BOT_TOKEN;

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channelName = 'general';

    // Set up the CronJob to run at 9 AM every day in Paris time
    const job = new CronJob('25 13 * * *', function() {
        client.guilds.cache.forEach(guild => {
            const channel = guild.channels.cache.find(channel => channel.name === channelName);
            if (channel) {

                const joke = fileUtils.giveAJoke();
                const embed = new EmbedBuilder()
                    .setTitle(joke.question)
                    .setColor('#0xffff00')
                    .setDescription(joke.answer)
                    .setTimestamp()
                    .setFooter({ text: 'Brought to you by JokeBot 🤖', iconURL: 'https://example.com/jokebot_icon.png' })

                channel.send({ embeds: [embed] });
            } else {
                console.error(`Channel ${channelName} not found in guild ${guild.name}`);
            }
        });
    }, null, true, 'Europe/Paris');

    job.start();
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
    const embed = new EmbedBuilder()
        .setTitle(joke.question)
        .setColor('#0xffff00')
        .setDescription(joke.answer)
        .setTimestamp()
        .setFooter({ text: 'Brought to you by JokeBot 🤖', iconURL: 'https://example.com/jokebot_icon.png' })

    interaction.reply({ embeds: [embed] });
})

client.login(token).catch(error => {
    console.error('Failed to login:', error);
});

