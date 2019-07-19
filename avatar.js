//avatar.js:
const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

let usuario = message.mentions.users.first() || message.author;
  
  let av = usuario.displayAvatarURL;
  if(av.endsWith('.gif')) {
    av = `${usuario.displayAvatarURL}?size=2048`
  }
    
 let embed = new Discord.RichEmbed()
 .setColor('#ff0000')
 .setTitle(`<:image:600809726342856724> ${message.mentions.users.first().username}`)
 .setDescription(`<:download:600739020523438111> **Clique** [**aqui**](${av}) **para baixar a imagem!**`)
 .setImage(av)
message.channel.send(embed)

}
exports.config = {
    name: "avatar",
    aliases: ["logo"]
}