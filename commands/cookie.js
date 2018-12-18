const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();

    let cookies = [
      "https://i.imgur.com/0dbibo9.jpg",
      "https://i.imgur.com/ZxCVyEk.jpg",
      "https://i.imgur.com/lcKFkTq.jpg",
      "https://i.imgur.com/3u1si5p.jpg",
      "https://i.imgur.com/uqy65gp.jpg",
      "https://i.imgur.com/AZfrf4j.jpg",
      "https://i.imgur.com/7Po7wM3.jpg",
      "https://i.imgur.com/4Fc8qAO.jpg",
      "https://i.imgur.com/adHZbhR.jpg",
      "https://i.imgur.com/shYd8Kw.jpg",
      "https://i.imgur.com/A97JonM.jpg"
      ];

    var cookie = message.content.substring(9)
    const cookieembed = new Discord.RichEmbed()
    .setDescription(message.author.toString() + " heres a cookie")
    .setImage(cookies[Math.floor(Math.random() * cookies.length)])
    .setColor("#d3340c")
    message.delete().catch();
    message.channel.send(cookieembed).then(msg => {
      msg.react("🍪")
    })}



 
module.exports.help = {
  name: "cookie"
}
