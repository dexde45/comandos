const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (client,  message, args) => {
  var ids = ["341046919025524746", "2", "3"];
if (ids.includes (message.author.id)) return message.channel.send("você está proibido de me usar!")
      

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");
  if(!tomute) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro.").addField(`Erro:`, `Você deve mencionar um usuário para que ele seja mutado.`));
  let muterole = message.guild.roles.find(role => role.name === 'Muted');

  if(!muterole){
    try{
      muterole = await message.guild.createRole({ 
        name: "Muted",
        color: "RANDOM",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro foi encontrado.").addField(`Erro:`, `Você deve especificar o tempo para que o usuário seja mutado.`));

  await(tomute.addRole(muterole.id));
  message.channel.send(new Discord.RichEmbed().setAuthor("Um usuário foi mutado!").addField("Usuário:", `<@${tomute.id}>`).addField(`Tempo mutado:`, `${ms(ms(mutetime))}`))

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(new Discord.RichEmbed().setAuthor("Usuário desmutado!").addField(`Desmutado:`, ` <@${tomute.id}> foi desmutado.`));
  }, ms(mutetime));
  
}
exports.config = {
    name: "mute",
    aliases: ["mutar"]
}