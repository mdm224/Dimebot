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
        
          try {
              await page.waitForSelector ("body > div > div > div > div > div > dl.float_right > dd", { timeout: 500 })
              const result1s = await google.scrape(bandName + " metallum", 1);
            console.log('results', result1s);
              message.channel.send({ embed: {
            color: 3447003,
            title: "Band name: "+ bandName,
            image: {
                url: result1s[0].url},
            url: url}});
            }
         catch (error) {
                try{
                    await page.waitForSelector ("#content_wrapper > ul", { timeout: 1000 })
                    const result1s = await google.scrape(bandName + " metallum", 1);
                    console.log('results', result1s);
                    message.channel.send({ embed: {
                    color: 3447003,
                    title: "Band name: "+ bandName,
                    image: {
                        url: result1s[0].url},
                    url: url}});
                }

                
                catch (error) {
                message.channel.send("Not on MA.");
                }
            }
          await browser.close();
        })();
    
}
}
