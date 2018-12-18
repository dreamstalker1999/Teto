const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.some(r=>["King"].includes(r.name))) {
            message.channel.send("You do not have permission to use this!" + message.author);
            return;
        }
    var nameResult = args.join(' ');
      if (!nameResult) nameResult = null;
        bot.user.setActivity(nameResult, {type: "WATCHING"});
          let embed = new Discord.RichEmbed()
          .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
          .setDescription(`"`+`${nameResult}`+ `" ` + `is now my new Playing Game. (Set as WATCHING)`)
            message.channel.send(embed)
            }
  
module.exports.help = {
  name: "game"
}
