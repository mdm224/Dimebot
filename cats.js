const puppeteer = require('puppeteer-extra');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.metal-archives.com/images/cats/1.jpg');
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: 'C:\Users\Administrator\Desktop\cats\cat1.jpg'});
})();

