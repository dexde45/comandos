exports.run = (client, message, args) => {
  if (message.author.id !== '469178738635046914') return message.channel.send('**Somente meu dono pode utilizar este comando.**');
  if (!args || args.length < 1)
    return message.reply("⚠️ **Escreva o comando que deseja dar reload!**");

    const commandName = args[0];

    if(!client.commands.has(commandName)) {
      return message.reply("⚠️ **Comando inexistente!**");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`✔️ **O comando ${commandName} foi recarregado com sucesso!**`);

}
exports.config = {
    name: "carregar",
    aliases: ["reload"]
}