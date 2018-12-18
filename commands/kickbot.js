const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ownerID = "374245145329139712";

exports.run = async (bot, message, args) => {
         if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");

         var error17 = new Discord.RichEmbed().setColor("RANODM")
             .setDescription('**Please enter a valid server ID.**')
             .setColor(0xff0000)

         var error18 = new Discord.RichEmbed().setColor("RANDOM")
             .setDescription('**You cannot kick the bot from this server!**')
             .setColor(0xff0000)


         if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
             msg.delete(9000)
         });

         //If tried kick bot from a main server (like for emote provider) will return error18
         if (args[0] === 482532248613158932) return message.channel.send(error18).then(msg => {
             msg.delete(9000)
         });

         bot.guilds.get(args[0]).leave();
         message.channel.send(`**Bot was been removed from server id [${args[0]}]**`)
     }
module.exports.help = {
  name: "kickbot"
}