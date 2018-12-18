      
const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
if(!args[0]) return message.channel.send("no");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`Purged ${args[0]} messages.`).then(msg => msg.delete(1000));
});
    
}

module.exports.help = {
  name: "purge"
}