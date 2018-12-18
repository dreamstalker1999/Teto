const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Sorry, you don\'t have permission!')
    try {
        let nick = args.join(" ").trim();
        if (nick) {
            message.guild.me.setNickname(nick).catch(e => message.err(e, "while setting nickname"));
            message.channel.send(`Successfully set nickname to \`${nick}\`!`);
        } else {
            message.guild.me.setNickname(null).catch(e => message.err(e, "while resetting nickname"));
            message.channel.send("Successfully reset nickname!");
        }
    }catch (e) {
        message.err(e, "while changing nickname");
    }}
 
module.exports.help = {
  name: "nick"
}