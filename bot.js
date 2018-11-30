const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("514112745554182148");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver  Uỉė..**`), 2000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "514118021552406529" && ch.type === 'voice').join();

});




client.login(process.env.BOT_TOKEN);
