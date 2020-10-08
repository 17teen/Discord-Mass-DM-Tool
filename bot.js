const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const client = new Client();
const { token } = require('./config.json');
const { readdirSync } = require("fs");
const fs = require('fs');
const { join } = require("path");

client.commands = new Discord.Collection();

const prefix = 'r';

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

const config = require('./config.json');
client.config = config;

// https://github.com/17teen

client.on('ready', () => {
    console.log(`${client.user.username} is online`)

    client.user.setActivity({type:"STREAMING", url: "https://www.twitch.tv/ayoohennio", name: "7teen made this <$"})

});

client.on("message", async message => {

    

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;


    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }

})

client.login(token);
