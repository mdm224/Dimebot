module.exports = {
    name: 'lastfm',
    description: 'lastfm command',
    execute(arg2, message, google, puppeteer)
    {
        (async () => {
            const browser = await puppeteer.launch({headless: true});
                const page = await browser.newPage();
                await page.goto('https://www.last.fm/user/'+arg2);
                
                const nowPlay = await page.$$eval('#recent-tracks-section > table > tbody > tr:nth-child(1) > td.chartlist-name > a', ele => ele.map(ele => ele.textContent));
                                                
                const artist = await page.$$eval('#recent-tracks-section > table > tbody > tr:nth-child(1) > td.chartlist-artist > a', ele => ele.map(ele => ele.textContent));
    
                
               
                console.log(nowPlay);
                message.channel.send(arg2 + " is currently listening to " + nowPlay + " by " + artist);
                await browser.close();
    
                
    
                
            })();
    }
}