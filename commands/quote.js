module.exports = {
    name: 'quote',
    execute(message, args)
    {
        const fs = require('fs');
        fs.readFile('quoteList.txt', 'utf8', function(err, contents) {
            var  arg1 = contents.split('\n\n');//splits the string into an array
           var arg2 = arg1.toString().replace("pick", "");//removes the "pick" from the array and create a new string
          
           arg2 = arg2.split(",");
            const numb = Math.floor(Math.random() * (arg2.length));
            message.channel.send(arg2[numb]);
        });
         
        console.log('after calling readFile');
    }
    }
