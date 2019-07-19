const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args, client) => {
    if (message.author.id !== '469178738635046914') return message.channel.send('**Somente meu dono pode utilizar este comando.**');
    try {
        message.channel.send('**O Reinicio do Bot foi Bem Sucedido.**').then(message => bot.destroy())
        message.channels.get("600361870515240961").send("Test")
    .then(() => bot.login(config.token))
} catch (e) {
    message.channel.send(`${client.clean(err)}`)
  }
}
exports.config = {
    name: "reiniciar",
    aliases: ["reload"]
}