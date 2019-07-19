const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()

    .setColor('#ff0000')
    .setAuthor(``)
    .setTitle(`**SUPER DEXDE** <:email:600696702885953538> **Comandos**`)
    .setDescription(`**Olá! ${message.author.username} Bem-Vindo(a) ao meu painel de ajuda.**
     **Prefixo: d!**`) 
    .addField('<:Moderao:600698291575062560>**│ Moderação:**','**│`ban`│`kick`│`mute`│`unmute`│`limpar`│**')
    .addField('<:Utilidades:600703049555771405>**│ Utilidades:**','**│`calculadora`│`ping`│`denunciar`│`help`│`say`│`convidarbot`│`avatar`**')
    .addField('<:estrela:600708847715352595>│ **Diversão:**','**│`cachorro`│`gato`│`meme`││`corrida`│`tapa`│`beijar`│`roleta`│`atirar`│`abraço`**')
                                                    
    
    
    message.channel.send(helpembed);

}
exports.config = {
    name: "ajuda",
    aliases: ["help"]
}