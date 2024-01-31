const {test, expect} = require('@playwright/test');

test('Keyboard actions', async({page})=> {

    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('name="text1"').fill('Welcome to Wado Vice City') or:
    await page.type('[name="text1"]', 'Welcome to Wado Vice City')

    //Ctrl + A --> select the text
    await page.keyboard.press('Control+A');
    //Ctrl + C --> copy text
    await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    //Ctrl + v --> paste text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);



})