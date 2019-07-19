const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("**insira sua sugestão.**")

    let embed = new Discord.RichEmbed()
        .setColor("#0051FF")
        .addField("**Sugestão**", `**${sugestao}**`)
        .setFooter(`**Sugestão enviada por: ${message.author.tag}**`, `**${message.author.avatarURL}**`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.id === "600753183245074443");
    if (!canal) return message.reply("***não existe nenhum canal para enviar a sua sugestão.**");

    message.delete();
    canal.send(embed).then(msg => msg.react("<:concluido:600365895533068298>").then(r => msg.react("<:Negativo:601118783557599232>")));
    message.reply(`**sua sugestão foi enviada com sucesso!**`);
}
exports.config = {
    name: "sugestão",
    aliases: ["sugerir"]
}