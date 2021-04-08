module.exports = {
    name: 'img',
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
