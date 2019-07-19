const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
  if(!user) return message.channel.send('**Você precisa mencionar alguém para beijar!**');

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`)

    let kissembed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle(`**${message.author.username} beijo  ${user.username}**`)
    .setImage(body.url);
    message.channel.send(kissembed);

}
exports.config = {
    name: "beijar",
    aliases: ["kiss"]
}