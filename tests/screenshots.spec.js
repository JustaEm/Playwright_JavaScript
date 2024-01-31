import { test, expect } from '@playwright/test';

test('Page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'test/screenshots' + Date.now() + 'CurrentViewPage.png'})

});



test('Full page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'test/screenshots'+ 'FullPage.png', fullPage:true})

});



test.only('Element page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'test/screenshots'+ 'ElementPage.png'})

});