const Discord = require('discord.js');
const client = new Discord.Client();



const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
var Scraper = require('images-scraper');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());


//const JonBot = new Client();
const prefix = '.';


const theRoom = [
    "in a few minutes bitch",
    "erybody betray me",
    "am fed up with dis worl",
    "oh hia doggy",
    "Two’s great but three's a crowd",
    "anyway how’s your sex life?",
    "oh hey denny",
    "oh hia lisa",
    "you're tearing me apart Lisa!!!"
]


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
    },
  });


  


  if(message.content.includes("Pantera") &&  message.author.id === "326894221481213952") 
  
  {
    message.delete()
    message.channel.send("stfu jon");
  }


if (!message.content.startsWith(prefix)  || message.author.bot) return; //if the message contains the prefix, start
//|| message.author.id === "326894221481213952"

   var arg = message.content.slice(prefix.length).trim().split(' ');//starts splitting the text 
   var command = arg.shift().toLowerCase();//rmoves the command from the message
   var arg2 = arg.toString();//re-builds the string

    if (command === 'mdm'){
        message.channel.send("weeb");
    }

    if (command === 'ping')
    {
        client.commands.get('ping').execute(message, arg);
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
else if (command === 'addquote')
{
    client.commands.get('addquote').execute(message, arg, puppeteer);
}

else if (command === 'fuck')
{
    client.commands.get('fuck').execute(message);
}

else if (command === 'hetfield')
{
    client.commands.get('hetfield').execute(message);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if (command === 'quote')
{
    client.commands.get('quote').execute(message, arg);
}

else if (command === 'quotelist')
{
    client.commands.get('quotelist').execute(message);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (command === 'roots')
    {
        message.channel.send("BLOODY ROOTS!");
        message.channel.send("https://thumbs.gfycat.com/FeistyBrilliantCattle-size_restricted.gif");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (command === 'jumpdafuckup')
    {
        message.channel.send("Motherfucker you don't understand all my hate!"+
        "\nMotherfucker you don't understand all my rage!"+
        "\nMotherfucker you don't understand all my pain!")
    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (command === 'jon'){
        Jon(message);
        
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (command === "disturbed")
{
    message.channel.send("oh ah ah ah ah \nhttps://www.youtube.com/watch?v=66gSvNeqevg");

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    else if (command === 'pick')
    {
        client.commands.get('pick').execute(message, arg);
        
    }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    else if (command == "stan")
    {
        message.channel.send("stan Unlucky Morpheus!");
    }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





        else if (command === 'brady')
        {
            client.commands.get('brady').execute(message);
        }

        else if (command === 'varg')
        {
            message.channel.send("https://tenor.com/view/vikernes-burzum-black-metal-trve-gif-9488230");
        }

        else if (command === 'trubisky')
        {
            client.commands.get('trubisky').execute(message);
        }

        else if (command === 'allen')
        {
           client.commands.get('allen').execute(message); 
        }

    else if (command ==='stars'){
        
        message.channel.send('https://tenor.com/view/dallas-stars-jamie-benn-bow-down-stars-nhl-gif-19478355');
    }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    else if (command === 'room')
    {
        const Response = Math.floor(Math.random() * theRoom.length);//picks a random number and prints the quote that goes with it 
        message.channel.send(theRoom[Response]);
    }






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








    else if (command === 'jaqen')
    { 
        message.channel.send("No posers allowed, Jaqen. \nhttps://youtu.be/bHLTN-ewVhA");
    }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    else if (command === "gars")
    {
        message.channel.send("Gars before Lars");
    }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    else if (command === "jason")
    {
        message.channel.send("https://cdn.discordapp.com/attachments/714219258032422936/805870600585216030/image0.gif")
    }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    else if (command === "dragonforce")
    {
        client.commands.get('dragonforce').execute(message);
    }


    else if (command === 'lars')
    {//lol
                
        message.channel.send("https://thinkchristian-webassets.imgix.net/articleImages/2019/sesame-street-at-50-craft.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=500&ixlib=php-1.1.0&q=80&w=800&s=fccd8dc1bbdd22d711ef73af868a65e5")
        
    }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    else if (command === 'help')
    {
        client.commands.get('help').execute(message);
        
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


    else if (command === 'poser')
    {
        message.channel.send("Poser, you stand alone in the dark"+
        "\nPoser, I wonder why"+
        "\nNoah put you in the ark"+
        "\nAnd you don't know the difference"+
        "\nbetween Metallica and Iron Maiden"+
        "\nPoser, you have the t-shirt of Reload")
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === 'lastfm')
    {   
    client.commands.get('lastfm').execute(arg2, message, google, puppeteer);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    else if (command === 'randband')
    {   
        arg2 = arg2.charAt(0).toUpperCase() + arg2;
        var letter = arg2.charAt(1);
       arg2 = arg2.replace(letter, '');
        console.log(arg2);
      client.commands.get('randBand').execute(arg2, message, google, puppeteer);
        
    }
    


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === 'walk'){//prints all of walk's lyrics
        Pantera(message);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    else if (command === "labrie")
    {
        message.channel.send("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/21/0/bw2b09_shrimp_cocktail.jpg.rend.hgtvcom.826.620.suffix/1557928675507.jpeg");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    else if (command === "number")
    {
        number = Math.floor(Math.random() * arg2 + 1);
        message.channel.send("0-" + arg2 +" inclusive: " + number);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    else if (command === "schaffer")
    {
        message.channel.send("https://pbs.twimg.com/media/EsBibP3W4AMGCMx.jpg");
        message.channel.send("0-0-0 0-0-0 0-0-0 0-0-0");
    }        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    else if (command == "gravedanger")
    {
        message.channel.send("https://youtu.be/0MRNVQmwxhM");
    }





})



function Pantera (message)
{
    message.channel.send("Can't you see I'm easily bothered by persistence \nOne step from lashing out at you... \nYou want in to get under my skin And call yourself a friend" +
        "\nI've got more friends like you What do I do?" +
        "\nIs there no standard anymore?" +
        "\nWhat it takes, who I am, where I've been Belong" +
        "\nYou can't be something you're not" +
        "\nBe yourself, by yourself Stay away from me" +
        "\nA lesson learned in life Known from the dawn of time" +
        
        "\n\nRespect, walk, what did you say?" +
        "\nRespect, walk"+
        "\nAre you talkin' to me? Are you talkin to me?" +
        
        "\n\nRun your mouth when I'm not around It's easy to achieve" +
        "\nYou cry to weak friends that sympathize" +
        "\nCan you hear the violins playing you song?" +
        "\nThose same friends tell me your every word" +
        
        "\n\nAre you talking to me? No way punk" +
        
        
        "\nIs there no standard anymore?" +
        "\nWhat it takes, who I am, where I've been Belong" +
        "\nYou can't be something you're not" +
        "\nBe yourself, by yourself Stay away from me" +
        "\nA lesson learned in life Known from the dawn of time" +
        
        "\n\nRespect, walk, what did you say?" +
        "\nRespect, walk, are you talkin' to me?" +
        "\nRespect, walk, what did you say?" +
        "\nRespect, walk" +
        "\nAre you talkin' to me? Are you talkin' to me?" +
        "\nNo way, punk" +
        "\n\nRespect, walk, what did you say?" +
        "\nRespect, walk, are you talkin' to me?" +
        "\nRespect, walk, what did you say?" +
        "\nRespect, walk" +
        "\nAre you talkin' to me? Are you talkin' to me?" +
        "\nWalk on home, boy");
}


function Jon (message)
    {
        
        const responses = [
            "weeb",
            "poser",
            "of course there's a dragon",
            "/me unsheathes sword",
            "beer > flowers",
            "thrasher than youll ever be",
            "Pan Fucking Tera",
            "Stan Varg",
            "We stansi Hansi",
            "Dave Em All",
            "Pearcival",
            "melodic djentleman",
            "Pablo honey",
            "it's cold in here",
            "Konichiwa melodic san",
            "kurwa",
            "SCOTLAND",
            "no posers allowed"
        ];

        const Response = Math.floor(Math.random() * responses.length);
            message.channel.send(responses[Response]);
    }




    



    client.login(token);