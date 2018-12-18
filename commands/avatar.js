const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: nice`, `${bot.user.username}: 🔥`, `${bot.user.username}: Someone's looking sharp today!`, `${bot.user.username}: oof if i wasn't a bot...`, `${bot.user.username}: looking sexier than a mug`];
  var rand = Math.floor(Math.random() * footertext.length);
  var randomfooter = footertext[rand]; 
  let boticon = bot.user.displayAvatarURL
  
      if (args.join(" ") == "") {
        message.reply("you need mention a user for this command! Syntax: !avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); 
        let image = user.displayAvatarURL; 
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) 
            .setColor('random')
            .setImage(image)
            .setFooter(`${randomfooter}`, `${boticon}`) 
            message.channel.send(embed); 
    }
}
    

module.exports.help = {
  name: "avatar"
}