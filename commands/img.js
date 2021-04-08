module.exports = {
    name: 'img',
    description: 'this is a addquote command',
    execute(arg, message, google)
    {
        
        message.channel.send("Search started!");

        (async () => {
            const result1s = await google.scrape(arg, 20);
           console.log('results', result1s);
            
           
           message.channel.send(result1s[Math.floor(Math.random() * result1s.length)].url);
           
          })();
    }
}