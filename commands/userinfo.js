const Discord = require('discord.js');
const moment = require("moment");

exports.run = async(bot, message, args, ops) => {
  let user, member;
if (message.mentions.users.size) {
  user = message.mentions.users.first();
}
else if (args.id) {
  member = await message.guild.fetchMember(args.id);
  if (member) {
    user = member.user;
  }
}
if (!user) {
  user = message.author;
}
if (!member) {
  member = await message.guild.fetchMember(user.id);
}
let nick = member.nickname;
if (!nick) {
  nick = '-';
}
let status = user.presence.status;
if (status === 'online') {
  status = 'Online';
}
else if (status === 'idle') {
  status = 'Idle';
}
else if (status === 'dnd') {
  status = 'Do Not Disturb';
}
else {
  status = 'Offline';
}

let roles = member.roles.map(r => r.name).slice(1).join('\n');
if (roles.length === 0) roles = '-';

let userembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setDescription("**__This is the user's info!__**")
.setColor("#42f4eb")
.addField("**__Full Username__**", user.tag, true)
.addField("**__ID__**", user.id, true)
.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("**__Status__**", status, true)
.addField("**__Nickname__**", nick, true)
.addField("**__Roles__**", roles, true)
.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
.addField("**__Requested By__**", message.author.tag) 
.setThumbnail(user.displayAvatarURL)
.setTimestamp()

message.delete().catch();
message.channel.send(userembed).then(msg => {
        msg.delete(20000)
        })
      .catch();
      
  }

module.exports.help = {
  name: "userinfo"
}