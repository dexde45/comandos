const Discord = require('discord.js')

exports.run = async ({vary, message, args}, t) => {
if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply(t("errors:missingOnePermission", {permission: 'Gerenciar emojis'}))
if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.reply(t("errors:botMissingOnePermission", {permission: 'Gerenciar emojis'}))
if (!args[0]) {
  return message.reply(t("commands:addemoji.correctUsage"))
}
if (!args[1]) {
  return message.reply(t("commands:addemoji.correctUsage"))
}
  message.guild.createEmoji(args[0], args[1])
  message.reply(t("commands:addemoji.sucess"))
}
exports.config = {
    name: "addemoji",
    aliases: ["adicionaremoji"]
}