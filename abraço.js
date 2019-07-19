const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send("**Mencione alguém para dar um abraço**");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Deu um Abraço em **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("#ff0000")
    .setFooter(`Abraço dado por ${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(hugEmbed)

  }
  exports.config = {
      name: "abraço",
      aliases: ["hug", "abraçar"]
  }