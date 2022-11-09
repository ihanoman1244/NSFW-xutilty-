const Discord = require('discord.js');
const akaneko = require('akaneko');
const keepAlive = require('./server');
const mySecret = process.env['token']
const pornpic = require('porn-picture')
const UltimateNSFW = require('ultimate-nsfw'); 
const nsfw = new UltimateNSFW();
const Waifu = require('./index.js')
const gifFinder = require('gif-finder').gifFinder

// Create New Client //
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
client.on('ready', () => { 
  client.user.setActivity("o.asu | Memek Hunter", {type: "PLAYING" })
   console.log(`Successfully enabled Streaming Mode.`)
})

 
// Bot Settings //
const settings = {
    prefix: "o.",
    token: "MTAzMDA5NTk1NTI2Mjk2MzcyMg.GMGbyk.WPdrj0gQdrXQAJbaUTN4OoEN-kp0EPAKELvrQc"
}


// On "Message" Event! //
client.on('message', async message => {

    // Create New Embed //
    const embed = new Discord.MessageEmbed();

    // Defines Command //
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

    // Onii-chan, don't reply! //
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    if (command == 'lewdneko') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(embed);

    } else if (command == 'maid') {
      if (!message.channel.nsfw) return message.channel.send('This channel isn\'t marked as NSFW! ❌ ');

        // For Embed //
        embed.setImage(await akaneko.nsfw.maid());
        return message.channel.send(embed);

    } else if (command == 'maid') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.nsfw.maid());
        return message.channel.send(embed);

    } else if (command == 'lewdneko') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.nsfw.lewdNeko());
        return message.channel.send(await akaneko.lewdNeko());

    } else if (command == 'gif') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.gif());

      } else if (command == 'loli') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('iya gua tau selera orang beda²')
      .setDescription('Tapi selera lu menyimpang asu')
      .setImage('https://cdn.discordapp.com/attachments/1017413396334907454/1038398429770039296/FB_IMG_16653219772130874.jpg')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setTitle('PUKUL PEDO')
          .setImage('https://cdn.discordapp.com/attachments/1017413396334907454/1038398429770039296/FB_IMG_16653219772130874.jpg');
        return message.channel.send(embed);
      
    }  else if (command == 'feet') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.feet());

    }  else if (command == 'ass') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);
GG

        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.ass());

    }  else if (command == 'bdsm') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.bdsm());

    }  else if (command == 'blowjob') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.blowjob());

    }  else if (command == 'cum') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.cum());

    }  else if (command == 'doujin') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.doujin());

    }  else if (command == 'femdom') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.femdom());

    }  else if (command == 'foxgirl') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.foxgirl());
      

        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.gifs());

    }  else if (command == 'glasses') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.glasses());

    }  else if (command == 'hentai') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.hentai());

    }  else if (command == 'netorare') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.netorare());

    }  else if (command == 'memek') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await nsfw.pussy());
        return message.channel.send(embed);
      
}  else if (command == 'nyilit') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setTitle('ni yang minta real')
          .setImage(await gifFinder.getGif());
        return message.channel.send(await gifFinder('anal'));
      
      }  else if (command == 'waifu') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await nsfw.waifu());
        return message.channel.send(embed);
      
    }  else if (command == 'masturbasi') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);

        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.masturbation());

    }  else if (command == 'orgy') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.orgy());

    }  else if (command == 'panties') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.panties());

    }  else if (command == 'pussy') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.pussy());

    }  else if (command == 'panties') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.panties());

    }  else if (command == 'school') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.school());

    }  else if (command == 'tentakel') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.tentacles());

    }  else if (command == 'thighs') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.thighs());

    }  else if (command == 'uglyBastard') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.uglyBastard());

    }  else if (command == 'uniform') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.uniform());

    }  else if (command == 'yuri') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.yuri());

    }  else if (command == 'zettaiRyouiki') {
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('Ga bisa di sini bro')
      .setDescription('buat akses bot NSFW harus di channel age register , buka ae pengaturan channel centang age register nya')
      if (!message.channel.nsfw) return message.channel.send(nsfwEmbed);


        // For Embed //
        embed.setImage(await akaneko.lewdNeko());
        return message.channel.send(await akaneko.nsfw.zettaiRyouiki());



  }  else (command == 'help') 
      const nsfwEmbed = new Discord.MessageEmbed()
      .setColor('#e809a5')
      .setTitle('cari commands? ada di bio')
      .setDescription('Command list ada di bio pulkon bro')
  .setImage('https://cdn.discordapp.com/attachments/1017413396334907454/1038191544315957268/f091c341764052550e8ec773e4be6422.png')
  .setFooter("Orang hilang , Jika menemukan nya hub 08696969696")
.setTimestamp('Date.now() + ms(timeAdded)');
  
  
  message.channel.send(nsfwEmbed);
  
  


});

keepAlive();


client.login(process.env.KONTOL);


