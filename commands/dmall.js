const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete().catch()
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if (message.author.id != 374245145329139712) return message.reply("You can't use the command! It's Developer only!")
      let DMALL = args.join(" ").slice(0);
    if (!DMALL) return message.channel.send({embed: {
      color: 0xC64540,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0x00c1c1,
          title: `Message:`,
          description: `${DMALL}`
        }});
    });

}
  
module.exports.help = {
  name: "dmall"
}