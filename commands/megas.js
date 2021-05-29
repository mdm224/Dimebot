module.exports = {
    name: 'megas',
    execute(message, args)
    {
        const fs = require('fs');
        fs.readFile('megasList.txt', 'utf8', function(err, contents) {
            args = contents.split('\n\r\n');//splits the string into an array
           var arg2 = args.toString().replace("pick", "");//removes the "pick" from the array and create a new string
          
           arg2 = arg2.split(",");
            const numb = Math.floor(Math.random() * (arg2.length));
            console.log(numb);
            message.channel.send(arg2[numb]);
        });
         
        console.log('after calling readFile');
    }
    }
