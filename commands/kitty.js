const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let cats = [
        "http://www.catgifpage.com/gifs/307.gif",
        "http://www.catgifpage.com/gifs/306.gif",
        "http://www.catgifpage.com/gifs/305.gif",
        "http://www.catgifpage.com/gifs/302.gif",
        "http://www.catgifpage.com/gifs/301.gif",
        "http://www.catgifpage.com/gifs/299.gif",
        "http://www.catgifpage.com/gifs/297.gif",
        "http://www.catgifpage.com/gifs/296.gif",
        "http://www.catgifpage.com/gifs/291.gif",
        "http://www.catgifpage.com/gifs/283.gif",
        "http://www.catgifpage.com/gifs/272.gif",
        "http://www.catgifpage.com/gifs/270.gif",
        "http://www.catgifpage.com/gifs/263.gif",
        "http://www.catgifpage.com/gifs/252.gif",
        "http://www.catgifpage.com/gifs/251.gif",
        "http://www.catgifpage.com/gifs/249.gif",
        "http://www.catgifpage.com/gifs/319.gif",
        "http://www.catgifpage.com/gifs/323.gif",
        "http://www.catgifpage.com/gifs/321.gif",
        "http://www.catgifpage.com/gifs/314.gif"
];

    var cat = message.content.substring(8);

    const catembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " Heres a random cat!!! " + cat)
    .setImage(cats[Math.floor(Math.random() * cats.length)])
    message.delete().catch();
    message.channel.send(catembed)
}
 
module.exports.help = {
  name: "kitty"
}
