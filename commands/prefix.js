const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args, level) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Sorry, you don\'t have permission to change server prefix')

if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')

db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
		message.channel.send(`Server Prefix has been changed to ${i}`);
	})
}
  
module.exports.help = {
  name: "prefix"
}