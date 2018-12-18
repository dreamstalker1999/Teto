const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

function loadCmds() {
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldnt find commands");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    delete require.cache[require.resolve(`./commands/${f}`)]
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
})
}

exports.run = (bot, message, args) => {
      message.delete().catch()
    if(message.author.id != '374245145329139712')return message.channel.send("You do not have permission to use this!")
    
     const rrembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("All Commands Reloaded Master!")
    .setTimestamp()
    message.channel.send(rrembed).then(msg => {
      msg.react("✅")
      loadCmds()
 })
}

  
  
    

module.exports.help = {
  name: "reload"
}