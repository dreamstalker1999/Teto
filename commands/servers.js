const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ownerID = "374245145329139712";

exports.run = async (bot, message, args) => {

    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    let string = '';

    bot.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Bot is On ", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

module.exports.help = {
  name: "servers"
}