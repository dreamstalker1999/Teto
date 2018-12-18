const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ownerID = "374245145329139712";

exports.run = async (bot, message, args) => {
        let replies = [`10% Will never work!`, `20% Slight Chance of working!`, `30% Could work with some time!`, `40% Could Work`, `50% High Chance of Working`, `60% Will Work <3`, `70% A Great Match <3`, `80% So compaitable!`, `90% PERFECT MATCH`, `Soul mates! ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        const mUserA = mUser.avatarURL
        message.channel.send(replies[result])
      }

module.exports.help = {
  name: "ship"
}