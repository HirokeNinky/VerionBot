const Discord = require("discord.js");
const db =("quick.db");

var fortunes = [
    "Iya",
    "Kayaknya",
    "Iya banget :)",
    "Enggak",
    "Apaan sih ;v",
    "Waduh..",
    "Orang."
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ntapp");
    bot.user.setActivity("your custom status", { type: "PLAYING" })  // Set the bot's PLAYING/STREAMING/LISTENING/WATCHING status (.help | discord.gg/nNapvDU)
    bot.user.setStatus("online")  // Set the bot's online/idle/dnd/invisible status
});

bot.on("message", function(message) {
    if(message.author.bot) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
           let API = (bot.ping).toFixed(2)

           var embed = new Discord.RichEmbed()
              .setTitle(`:ping_pong: Pong!`)
              .setColor("#4286f4")
              .addField("API", `${API}ms`, true)
              message.channel.sendEmbed(embed);
            break;
        case "botstats":
            var embed = new Discord.RichEmbed()
                .setAuthor("Zalveey's Stats")
                .setDescription("Stats of the bot")
                .addField("Server", bot.guilds.size)
                .addField("Channel", bot.channels.size)
                .addField("User", bot.users.size)
                .setColor("#4286f4")
                .setThumbnail(bot.user.displayAvatarURL)
                .setFooter(`Bot Created By GorutoCraftYT#4907`, bot.user.displayAvatarURL)
          message.channel.sendEmbed(embed);
            break;
        case "ask":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Usage: .ask (your question)")
            break;
        case "serverinfo":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField("Server Name", message.guild.name, true)
                .addField("Server Owner", `<@${message.guild.ownerID}>`, true)
                .addField("Member Count", message.guild.memberCount, true)
                .addField("Roles", message.guild.roles.size, true)
                .addField("Channels", message.guild.channels.size, true)
                .addField("Server Region", message.guild.region, true)
                .addField("Server ID", message.guild.id, true)
                .addField("Created On", message.guild.createdAt, true)
                .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
                .setThumbnail(message.guild.iconURL)
                .setColor("#4286f4")
            message.channel.sendEmbed(embed);
            break;
        case "userinfo":
            let user = message.mentions.users.first() || message.author
            var embed = new Discord.RichEmbed()
                .setAuthor(`${user.tag} info`, user.displayAvatarURL)
                .addField("Username", user.username, true)
                .addField("Status", user.presence.status, true)
                .addField("Bot Account", user.bot, true)
                .addField("ID", user.id, true)
                .addField("Created On", user.createdAt, true)
                .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
                .setThumbnail(user.displayAvatarURL)
                .setColor("#4286f4")
                message.channel.sendEmbed(embed);
                break;
        case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){mesage.channel.sendMessage("Cleared!")})};
            break;
        case "invite":
          var embed = new Discord.RichEmbed()
              .setTitle("Links!")
              .setDescription("[Invite me!](https://discordapp.com/oauth2/authorize?client_id=504203566068793356&permissions=2146958839&scope=bot) \n[Join our server](https://discord.gg/nNapvDU)")
              .setThumbnail(bot.user.displayAvatarURL)
              .addField("Joined Servers", bot.guilds.size)
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
            break;
        case "help":
          var embed = new Discord.RichEmbed()
              .setAuthor(`${bot.user.username}'s Commands`, bot.user.displayAvatarURL)
              .setThumbnail(bot.user.displayAvatarURL)
              .setDescription("g:help\ng:ask\ng:serverinfo\ng:userinfo\ng:invite\ng:ping\ng:clear\ng:botstats\ng:say\ng:sayembed\ng:servericon\ng:discosheep\ng:useravatar\ng:botinfo\ng:kick")
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.author.sendEmbed(embed);

          message.channel.sendMessage(":incoming_envelope: Sending help message to your DM!")
            break;
        case "say":
          let args3 = message.content.split(" ").slice(1);

          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("u dont have permiss");

          message.delete()
          message.channel.sendMessage(args3.join(" "))
            break;
        case "servericon":
          var embed = new Discord.RichEmbed()
              .setTitle("Direct Link")
			        .setDescription(`**${message.guild.name} Server Icon**`)
              .setImage(message.guild.iconURL)
			        .setURL(message.guild.iconURL)
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
            break;
        case "discosheep":
          var embed = new Discord.RichEmbed()
              .setTitle("Disco Sheep!")
              .setDescription("[Direct link](https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif)")
              .setImage("https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif")
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
            break;
        case "useravatar":
          let user2 = message.mentions.users.first() || message.author
          var embed = new Discord.RichEmbed()
              .setAuthor(`**${user2.tag} User Avatar**`)
              .setTitle("Direct Link")
              .setImage(user2.displayAvatarURL)
              .setURL(user2.displayAvatarURL)
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
          break;
      case "botinfo":
          var embed = new Discord.RichEmbed()
              .setAuthor(`${bot.user.username} Info`, bot.user.displayAvatarURL)
              .addField("Bot Owner", "GorutoCraftYT#4907", true)
              .addField("Bot ID", bot.user.id, true)
              .addField("Created At", bot.user.createdAt, true)
              .addField("Lib", "discord.js", true)
              .addField("Prefix", PREFIX, true)
              .setThumbnail(bot.user.displayAvatarURL)
              .setColor("#4286f4")
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
          break;
      case "kick":
          if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!'); // Checks permission
          let member = message.mentions.members.first() || message.guild.members.get(args[0]); // Member mention
          if (!member) return message.channel.send('Please mention a member to kick!');
          if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal than you!');

          let reason = args.slice(2).join(' '); // Reason arguments

          member.kick(reason)

          var embed = new Discord.RichEmbed() //  RichEmbed constructor
          .setAuthor("Action | Kick", member.user.displayAvatarURL)
          .addField("Username", member.user.tag, true)
          .addField("Reason", `${reason}`, true)
          .addField("Moderator", `<@${message.author.id}>`, true)
          .setColor("#4286f4")
          .setTimestamp()
          .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
          message.channel.sendEmbed(embed);
              break;
	  case "sayembed":
	    let args4 = message.content.split(" ").slice(1);

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("u dont have permiss");

          message.delete()
          var embed = new Discord.RichEmbed()
              .setAuthor("Message")
              .setDescription(args4.join(" "))
              .setColor("#4286f4")
              .setTimestamp()  //.setFooter(new Date)
              .setFooter("Bot Created By GorutoCraftYT#4907", bot.user.displayAvatarURL)
              message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command")
    }
});

bot.login(TOKEN);
