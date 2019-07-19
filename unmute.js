module.exports.run = async (bot, message, args) => {
    
    let Role = message.guild.roles.find(r => r.name === "Muted");

    let usuario = message.mentions.members.first();

    if(!usuario) {
        return message.channel.send("**Quem você quer desmutar?**")
    } else{

        usuario.removeRole(Role)
        message.channel.send(`${usuario} **foi desmutado por** ${message.author}`);
    }
}

exports.config = {
    name: "unmute",
    aliases: ["desmutar"]
}