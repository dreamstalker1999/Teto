const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.author.hasPermission("ADMINISTRATOR")) return message.channel.send('Sorry, you don\'t have permission to change server prefix')
  
        const sayMessage = args.join(" ");
        message.delete().catch();
        message.channel.send(sayMessage);
    }
    
module.exports.help = {
    name: "say"
}   