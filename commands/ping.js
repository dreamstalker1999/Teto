const Discord = require("discord.js");
const Set = require("set");

module.exports.run = async (bot, message, args) => {
        message.delete().catch();
        message.channel.send('Pinging...')
        .then((newMsg) => {
            newMsg.edit(`Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
        });
    }

module.exports.help = {
    name: "ping"
}   