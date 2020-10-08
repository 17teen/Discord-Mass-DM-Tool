const Discord = require('discord.js')

module.exports = {
    name: "dmall",
    description: "makes a mass dm",

    async run (client, message, args) {

        args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        message.guild.members.cache.forEach(member => { // Looping through each member of the guild.  // mass dm
            // Trying to send a message to the member.
            // This method might fail because of the member's privacy settings, so we're using .catch
            member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          });
        
    }
}