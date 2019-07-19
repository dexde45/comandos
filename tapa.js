const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send("**Mencione alguém para da um tapa**");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let slapEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Deu um tapa em **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("#ff0000")
    .setFooter(`Tapa dado por ${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(slapEmbed)

}
exports.config = {
    name: "tapa",
    aliases: ["slap"]
}