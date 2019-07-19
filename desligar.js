module.exports.run = async (bot, message, args, client) => {
    if (message.author.id !== '469178738635046914') return message.channel.send('**Somente meu dono pode utilizar este comando.**');
      try {
      console.log("Desligamento com sucesso.")
          bot.destroy();
      process.exit();
    } catch (e) {
      mesage.channel.send(`${client.clean(err)}`)
    }
  }
  exports.config = {
      name: "desligar",
      aliases: ["off"]
  }