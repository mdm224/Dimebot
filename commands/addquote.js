module.exports = {
    name: 'addquote',
    description: 'this is a addquote command',
    execute(message, args, puppeteer)
    {
      const fs = require('fs');
      var  arg3 = args.toString().replace(/,/g, " ");
      fs.appendFile('quoteList.txt', "\n" + arg3 + "\n", function (err) {
        if (err) throw err;
        message.channel.send('Saved!');
      });

      (async () => {
        message.channel.send("Updating doc.");
        arg3 = arg3 + '\n' + '\n';
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://docs.google.com/document/d/1C0ApFGHV6hToq-1OjTpbl-2KOCJ7Ao0pCex5wRZq1JQ/edit?usp=sharing');
        await page.click('#gb > div > div.gb_Te > a');
        await page.waitFor(2000);
        await page.type('#identifierId', "stormofthelightsbane132@gmail.com");
        page.keyboard.press('Enter');
        await page.waitFor(2000);
        await page.type('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input', "primalfrost");
        page.keyboard.press('Enter');
    
        await page.waitFor(5000);
        await page.type('#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div:nth-child(1) > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div > span:nth-child(2) > span > span', arg3);
        await page.waitFor(10000);
        await browser.close();
        console.log("Done!");
        message.channel.send('Doc updated too.');
        await browser.close();
    
  })();
    }
}
