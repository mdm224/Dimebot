module.exports = {
    name: 'randBandC',
    description: 'this is a randband command',
    execute(arg2, message, google, puppeteer)
    {
        message.channel.send("Search started!");
      var cont = 0;
     randBand(arg2, message, cont, google, puppeteer); 
    }
}
    function randBand(arg2, message, cont, google, puppeteer){
        var searchCountry = arg2.toString().replace(/,/g, " ");
        {
            if (cont <= 50){
        (async () => {
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto('https://www.metal-archives.com/band/random');
            
           
            const url = await page.url();
           var title = await page.title();
            title = title.toString().replace(" - Encyclopaedia Metallum: The Metal Archives", "");

            const location =  await page.$eval('body > div > div > div > div > div#band_stats > dl.float_left > dd > a', ele => ele.textContent);
            const genre =  await page.$$eval('body > div > div > div > div > div > dl.float_right > dd', ele => ele.map(ele => ele.textContent));
            const country = await page.$eval('#band_stats > dl.float_left > dd:nth-child(2) > a', ele => ele.textContent);
            await browser.close();
            
            
            console.log("try " + cont + ", stuff: "+genre +" " + location);
            //console.log(searchGenre);
            
           
                //var count = 0;
                console.log(country);//logging the genre
                
                    if (country.includes(searchCountry))
                    {
                        
                        const results = await google.scrape(title + " metallum", 1);
                        console.log('results', results);
                     //   await browser.close();
                        
                        message.channel.send({ embed: {
                            color: 3447003,
                            title: "Band name: "+ title+ "\nGenre: " + genre[0] + "\nLocation: " + location + "\nLyrical themes: "+ genre[1],
                            image: {
                                url: results[0].url},
                            url: url }});
                        cont = cont + 1;
                         if (cont > 1)
                        {
                            message.channel.send("The search took "+ cont +" tries!");
                        }
                        
                        else if (cont = 1)
                        {
                             message.channel.send("The search took "+ cont +" try!");
                        }
                        cont = 50;
                    }
                    else if (cont <= 50)
                {
                cont = cont + 1;
              //  await browser.close();
                randBand(arg2, message, cont, google, puppeteer)
                }
                })();
            }

                else if (cont >= 50)
                {
                    message.channel.send("The search took more than 50 tries, please try again.");    
                }


                    } 

                }
