const Discord = require('discord.js');
const client = new Discord.Client();



const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
var Scraper = require('images-scraper');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
var count = 0;

//const JonBot = new Client();
const prefix = '.';





client.once('ready', () => {
    console.log('Jonbot is online');
});




client.on('message', message =>{

   
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));

for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const google = new Scraper({
    puppeteer: {
                  headless: true,
                  args: ['--no-sandbox','--disable-setuid-sandbox']
                },
  });

if (!message.content.startsWith(prefix)  || message.author.bot) return; //if the message contains the prefix, start
//|| message.author.id === "326894221481213952"

   var arg3 = message.content;
   var arg = message.content.slice(prefix.length).trim().split(' ');//starts splitting the text 
   var command = arg.shift().toLowerCase();//rmoves the command from the message
   var arg2 = arg.toString();//re-builds the string


    if (command === 'ping')
    {
        client.commands.get('ping').execute(message, arg);
    }


else if (command === 'addrole')
{
    client.commands.get('giverole').execute(message, arg, client);
}

else if (command === 'removerole')
{
    client.commands.get('removerole').execute(message, arg, client);
}

else if (command === 'pick')
 {
     client.commands.get('pick').execute(message, arg);
       
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    else if (command === 'randbandc')
    {
        arg2 = arg2.charAt(0).toUpperCase() + arg2;
        var letter = arg2.charAt(1);
        arg2 = arg2.replace(letter, '');
        console.log(arg2);
        client.commands.get('randBandC').execute(arg2, message, google, puppeteer);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === 'createrole')
    {
        client.commands.get('createrole').execute(message, arg3, prefix);
    }


    else if (command === 'deleterole')
    {
        client.commands.get('deleterole').execute(message, arg);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === 'help')
    {
        client.commands.get('help').execute(message);
        
    }

else if (command === 'addtemprole')
    {
        client.commands.get('givetemprole').execute(message, arg, client);
        
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    
    else if (command === "img")
    {

        client.commands.get('img').execute(arg, message, google);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === 'metal')//provides a MA link with the supplied band name
    {
        client.commands.get('MAband').execute(arg, message, google, puppeteer);
    }


    else if (command === 'randband')
    {   
        arg2 = arg2.charAt(0).toUpperCase() + arg2;
        var letter = arg2.charAt(1);
       arg2 = arg2.replace(letter, '');
        console.log(arg2);
      client.commands.get('randBand').execute(arg2, message, google, puppeteer);
        
    }
    

    else if (command === "number")
    {
        number = Math.floor(Math.random() * arg2 + 1);
        message.channel.send("0-" + arg2 +" inclusive: " + number);
    }


})

    client.login("ODA1NTQxMjgyMTY4MDQ1NTY4.YBcYxw.rdsu1i3wYItaJ_FWM0Y2N9eIzd0");
