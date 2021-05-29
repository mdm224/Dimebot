module.exports = {
    name: 'addmegas',
    description: 'this is a addquote command',
    execute(message, args, puppeteer)
    {
      const fs = require('fs');
      var  arg3 = args.toString().replace(/,/g, " ");
      fs.appendFile('megasList.txt', "\n" + arg3 + "\n", function (err) {
        if (err) throw err;
        message.channel.send('Saved!');
    });
      }
    }
