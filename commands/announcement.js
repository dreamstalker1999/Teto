const Discord = require('discord.js');
const send = require("quick.hook");
exports.run = (bot, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
		   const color = args[0]
		   let title = args[0];
		   const text = args.slice(0).join(" ");
		   const author = message.author;
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor('RANDOM')
		   .setThumbnail(message.guild.iconURL)
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made ")
		   .setTimestamp()
      message.channel.send(embed)
	   
}

module.exports.help = {
  name: "announcement"
}