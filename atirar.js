const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    let user = message.guild.member(message.mentions.users.first());
    if(!user) return message.reply('Você precisa mencionar alguém para atirar!');
    if(user.user.id == message.author.id) return message.reply('Você não pode atirar em sí mesmo!');

    let aEmbed = new Discord.RichEmbed()

    .setTimestamp()
    .setColor("#ff0000")
    .setTitle(`${message.author.username} deu um **TIRO** em: ${user.user.username} :gun:`)
    .setImage('https://media.giphy.com/media/p9x5ZzoyoRs64/giphy.gif')
    .setTimestamp()

    try {
        message.delete();
        message.channel.send(aEmbed);
    }catch (error) {
        console.log(error);
        message.channel.send(error);
    }
}
exports.config = {
    name: "atirar",
    aliases: ["shoot"]
}