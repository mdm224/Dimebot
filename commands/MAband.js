module.exports = {
    name: 'MAband',
    description: 'this is a band command',
    execute(arg, message, google, puppeteer)
    {
        var  bandName = arg.toString().replace(/,/g, "_");
        
        (async () => {
          
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('https://www.metal-archives.com/bands/'+bandName);
          const url = await page.url();

          const result1s = await google.scrape(bandName + " metallum", 1);
          console.log('results', result1s);
          await browser.close();
          message.channel.send({ embed: {
              color: 3447003,
              title: "Band name: "+ bandName,
              image: {
                  url: result1s[0].url},
              url: url}});
        })();
    }
}