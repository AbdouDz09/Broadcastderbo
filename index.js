const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "+"



//bc

client.on("message", message => {
    if (message.content.startsWith("+bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "+";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("+avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+adminbc')){
if(!message.author.id === '461468630773661699') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  
  client.on("message", message => {
    if (message.content === "+help") {
     const embed = new Discord.RichEmbed() 
         .setColor("RANDOM")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       +bc | لأرسال برود كاست للكل

       +obc  |  لأرسال برود كاست للأونلاين
     
       **`)

   message.author.sendEmbed(embed)
   
   }
   });


   






client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`dz!help music ,`,"http://twitch.tv/abdoufersaoui_dz")
client.user.setStatus("Dz")
});client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Abdou_DZ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : abdou-DZ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help | Dream Server.. ,`,"http://twitch.tv/abdoufersaoui_dz")
client.user.setStatus("Dz")
});


client.login(process.env.TOKEN);
