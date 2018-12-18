const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var result = Math.floor((Math.random() * 100) + 1);

    message.delete().catch();
    message.channel.send(message.author.toString() + " You rolled a: " + result)
}

module.exports.help = {
    name: "dice"
}