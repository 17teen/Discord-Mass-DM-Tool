// https://github.com/17teen
// Discord: 7teen#1464

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const myID = settings.ID;

const MassDM = String.raw`


                        ███╗   ███╗ █████╗ ███████╗███████╗    ██████╗ ███╗   ███╗    
                        ████╗ ████║██╔══██╗██╔════╝██╔════╝    ██╔══██╗████╗ ████║    
                        ██╔████╔██║███████║███████╗███████╗    ██║  ██║██╔████╔██║    
                        ██║╚██╔╝██║██╔══██║╚════██║╚════██║    ██║  ██║██║╚██╔╝██║    
                        ██║ ╚═╝ ██║██║  ██║███████║███████║    ██████╔╝██║ ╚═╝ ██║    
                        ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚═════╝ ╚═╝     ╚═╝    
                                                              

`;

console.log(cyan(MassDM));


client.on("ready", () => {
  console.log(greenBright(`                                             By thug angel#3868`));
  console.log(``);
  console.log(``);
  console.log(greenBright(`                                          Logged in as: ${client.user.username}#${client.user.discriminator}`));
  console.log(greenBright(`                                          Prefix: ${prefix}`));
  console.log(``);
  console.log(``);
  client.user.setActivity({ type: "STREAMING", name: `7teen!` });
});


client.on("message", message => {

  if (message.author.bot) return;

  // Bot Mentioned Help CMD
  if (message.mentions.has(client.user.id)) {
    const mention = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username}#${client.user.discriminator}`, client.user.avatarURL({ dynamic: true }))
      .setTitle(`Mass DM Tool V2 | Need Help?`)
      .setDescription(`Seems you're in need of help.
    \n **Prefix:** ${prefix}
    \n **Help:** ${prefix}help 
    \n **Mass DM:** ${prefix}dm [text] 
    \n **About:** ${prefix}about
    `)
      .setThumbnail(`https://media.discordapp.net/attachments/782188818434490388/789823212359909397/drain_gang.png`)
      .setFooter(`© Mass DM Tool V3 | Prefix: ${prefix} | By: ${founder}`)
      .setColor(0x36393E)
      .setTimestamp(Date.now());
    message.channel.send(mention)
  }

  // Help cmd

  if (message.content.startsWith(prefix + 'help')) {
    if (message.author.id != myID) {
      return message.reply('You are not authorised to use any of these tools commands.')
    }
    else {
      const help = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username}#${client.user.discriminator}`, client.user.avatarURL({ dynamic: true }))
        .setTitle(`Mass DM Tool V2 | Need Help?`)
        .setDescription(`Seems you're in need of help.
  \n **Prefix:** ${prefix}
  \n **Mass DM:** ${prefix}dm [text] 
  \n **About:** ${prefix}about
  `)
        .setThumbnail(`https://media.discordapp.net/attachments/782188818434490388/789823212359909397/drain_gang.png`)
        .setFooter(`© Mass DM Tool V3 | Prefix: ${prefix} | By: ${founder}`)
        .setColor(0x36393E)
        .setTimestamp(Date.now());
      message.channel.send(help)
    }
  }

  // About

  if (message.content.startsWith(prefix + 'about')) {
    if (message.author.id != myID) {
      return message.reply('You are not authorised to use any of these tools commands.')
    }
    else {
      const about = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username}#${client.user.discriminator}`, client.user.avatarURL({ dynamic: true }))
        .setTitle(`Mass DM Tool V2 | About`)
        .setDescription(`*This is a Vissage production.*
            \n**Founder** 
            \n \`Discord:\` [7teen](https://discord.com/users/709827684888215582) \n \`Github:\` [7teen](https://github.com/17teen) \n \`Telegram:\` [7teen](https://t.me/clairvoyant7teen) \n \n **Oragnization:** \n \`Vissage:\` [Vissage Inc.](https://github.com/Vissage) 
            \n **Disclaimer:**
            \n *Discord will only allow you to MASS DM once and then your bot will be flagged for spam and you will recieve the following error:* 
            \n \`UnhandledPromiseRejectionWarning: DiscordAPIError: Your bot has been flagged by our anti-spam system for abusive behavior.\` 
            \n *Your discord bot will be quarantined stopping you from Mass Messaging users in a guild.*
            \n **Previous testing suggests any guild over 100 members, results in your bot quarantined.**
            \n **Tool Description:** 
            \n \`Creation Date:\` 8/10/2020 \n \`Updated On:\` 17/01/2020 (V3) \n \`Language:\` JavaScript, Batch \n \`Operating System:\` Windows , macOS`)
        .setThumbnail(`https://media.discordapp.net/attachments/782188818434490388/789823212359909397/drain_gang.png`)
        .setFooter(`© Mass DM Tool V3 | Prefix: ${prefix} | By: ${founder}`)
        .setColor(0x36393E)
        .setTimestamp(Date.now());
      message.channel.send(about);
    }
  }


  // Mass DM cmd

  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != myID) {
      return message.reply('You are not authorised to use any of these tools commands.')
    }
    else {
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(greenBright(`DM'd ${member.user.username}#${member.user.discriminator}`))).catch(e => console.error(yellow(`Reattempting to DM member ${member.user.username}#${member.user.discriminator}`)));
      })
      message.channel.send(`${message.guild.memberCount} DM'd.`).then(message.delete({ timeout: 4000 })); // You can delete this if you want.
    }
  }

})

client.login(token);
