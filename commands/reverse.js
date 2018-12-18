const Discord = require('discord.js')
module.exports.run = (client, message, args, tools) => {
  if(!args[0]) return message.channel.send('Correct usage: **ks!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }

  message.channel.send(sreverse)
    
}

module.exports.help = {
    name: "reverse"
}