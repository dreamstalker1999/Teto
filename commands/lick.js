const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let licks = [
    "https://i.imgur.com/UPlNJs8.gif",
    "https://i.imgur.com/DrNAjWk.gif",
    "https://i.imgur.com/Pv6QJnJ.gif",
    "https://i.imgur.com/Udaklgp.gif",
    "https://i.imgur.com/iM2Hzl3.gif",
    "https://i.imgur.com/UUFXjzH.gif",
    "https://i.imgur.com/QDpVqHe.gif",
    "https://i.imgur.com/uALJJV2.gif",
    "https://i.imgur.com/xZ04mFM.gif",
]


    var lick = message.content.substring(6);

    const licksembed = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription(message.author.toString() + " Has licked " + lick)
    .setImage(licks[Math.floor(Math.random() * licks.length)])
    message.delete().catch();
    message.channel.send(licksembed).then(msg => {
        msg.delete(15000)
        })
      .catch();
}
 
module.exports.help = {
  name: "lick"
}
