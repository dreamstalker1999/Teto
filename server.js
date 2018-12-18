const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const botconfig = require("./botconfig.json")
const Discord = require("discord.js");
const weather = require("weather-js");
const superagent = require("superagent");
const urban = require("relevant-urban");
const moment = require("moment");
const fs = require("fs");
const ms = require("ms");
const Jimp = require("jimp")
const ownerID = "374245145329139712";
const setupCMD = "!createroles"
let initialMessage = `**React to the messages below once you have read the rules, to gain access to the server!**`;
let cooldown = new Set()
let cdseconds = 5;
const roles = ["Member"]
const reactions = ["✅"]

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
loadCmds()

  function changing_status() {
    let status = ['Hentai Haven UwU', 'With Boobies OwO', 'With Your Wifes Clit!']
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
  }


bot.on("ready", () => {
    console.log(`${bot.user.username} is online!`)  
    setInterval(changing_status, 9000);
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome-mat');
  if (!channel) return;
  return channel.send(`Welcome to the server, ${member} head over to #rules to get started!`);
});

bot.on('guildMemberRemove', member => {
    const goodbyechannel = member.guild.channels.find('name', 'welcome-mat')
    return goodbyechannel.send(`${member} has left the server`);
});

bot.on('guildBanAdd',(guild, user) => {
  const logschannel = guild.channels.find(ch => ch.name === 'logs');
  return logschannel.send(`${user.username} was just banned!`);
});

bot.on('guildBanRemove',(guild, user) => {
  const logschannel = guild.channels.find(ch => ch.name === 'logs');
  return logschannel.send(`${user.username} was just unbanned!`);
});

bot.on("disconnect", () => {
  console.log(`${bot.user.username} has been disconnected at ${new Date()}`)
});

bot.on("reconnecting", () => {
  console.log(`${bot.user.username} has reconnected at ${new Date()}`)
});

bot.on("message", async message => {  
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); 
    return messages;
}
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    
    let fetched = await db.fetch(`prefix_${message.guild.id}`);
    if (fetched === !null) prefix = botconfig.prefix;
    else prefix = fetched;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(botconfig.prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
  
    let msg = message.content.toUpperCase();
    let sender = message.author;
  
bot.on("message", message => {
    if (message.author.id == ownerID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
  
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
})
})
 
