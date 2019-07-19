exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
        return message.reply("⚠️ **Descupe mais você não tem a permisão nessesaria para executar esse comando!**");
    
      let totalDelMsg = parseInt(args[0]) + 1;
      let apagadas = totalDelMsg - 1;
    
      async function clear() {
          try {
          message.delete();
          const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
          message.channel.bulkDelete(fetched);
          message.reply(`✔️  **${apagadas} Mensagens apagadas.**`);
          } catch(e) {
              return message.reply("🤔 **Descupe mais não apago mais de 50 mensagens**");
          }
      }
      clear();
    
    }
    exports.config = {
        name: "limpar",
        aliases: ["excluir", "clean"]
    }