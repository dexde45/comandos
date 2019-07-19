const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (Robin, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);
    
    var embed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor('#ff0000')
    .setTimestamp(new Date())
    message.channel.send(embed);
    
}
exports.config = {
    name: "gato",
    aliases: ["cat"]
}