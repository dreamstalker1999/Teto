const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();

    let nekos = [
      "https://i.imgur.com/aUyLAfP.png",
      "https://i.imgur.com/8oPak66.png",
      "https://i.imgur.com/AOfniAv.png",
      "https://i.imgur.com/iS0y4sW.png",
      "https://i.imgur.com/6WwIDcS.png",
      "https://i.imgur.com/OcNd3Np.png",
      "https://i.imgur.com/JDDOKAU.png",
      "https://i.imgur.com/Y0QkPWW.png",
      "https://i.imgur.com/U8O4KWx.png",
      "https://i.imgur.com/Bz9ABJz.png",
      "https://i.imgur.com/UfNSltB.png",
      "https://i.imgur.com/WOC99Rm.jpg",
      "https://i.imgur.com/NsuLeg2.jpg",
      "https://i.imgur.com/Ho3qPb7.jpg",
      "https://i.imgur.com/x4Sfbpt.png",
      "https://i.imgur.com/OMfqq7H.png",
      "https://i.imgur.com/zhqeOx1.jpg",
      "https://i.imgur.com/kuO3qj2.png",
      "https://i.imgur.com/oqRjVLG.png",
      "https://i.imgur.com/ZO2xWGw.png",
      
      

    ];

    var neko = message.content.substring(6)
    const nekoembed = new Discord.RichEmbed()
    .setDescription(message.author.toString() + " heres a neko!")
    .setImage(nekos[Math.floor(Math.random() * nekos.length)])
    .setColor("#d3340c")
    message.delete().catch();
    message.channel.send(nekoembed)
}
 
module.exports.help = {
  name: "neko"
}