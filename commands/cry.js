const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
     let crys = [
        "https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314",
        "https://media1.tenor.com/images/c28ac58e9ed291c4dc784524dc0ac127/tenor.gif?itemid=9039052",
        "https://media1.tenor.com/images/f7fde4b118501c8fa5cb1a5dd171beab/tenor.gif?itemid=5652242",
        "https://media1.tenor.com/images/829e55b133ceb0a17f0930275fb28a03/tenor.gif?itemid=3543306",
        "https://media1.tenor.com/images/c2f8c21c93d26db295607eba1cd23d22/tenor.gif?itemid=9099975",
        "https://media1.tenor.com/images/6938dda780919ba2db48d42936fca709/tenor.gif?itemid=5017622",
        "https://media1.tenor.com/images/36b160e994566af8ce79e9bfc0c6130b/tenor.gif?itemid=10035498",
        "https://media1.tenor.com/images/7f480757eb2cd363c00b0c2cc81521d5/tenor.gif?itemid=8329549",
        "https://media1.tenor.com/images/031c7c348d3b86296976e2407723d4a8/tenor.gif?itemid=5014031",
];

var cry = message.content.substring(5);

const crysembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " :( " )
    .setImage(crys[Math.floor(Math.random() * crys.length)])
    message.delete().catch();
    message.channel.send(crysembed).then(msg => {
        msg.delete(15000)
        })
      .catch();
}
 
module.exports.help = {
  name: "cry"
}
