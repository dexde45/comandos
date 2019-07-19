exports.run = async (client, message) => {
    const m = await message.channel.send("Ping?");
    m.edit(`<:wifirouter:600817435427209290> **Pong! A Latência é** **${m.createdTimestamp - message.createdTimestamp}ms**. <:drive:600818661552291990>**A Latencia da API é** **${Math.round(client.ping)}ms**`);

  }
  exports.config = {
      name: "ping",
      aliases: [""]
  }