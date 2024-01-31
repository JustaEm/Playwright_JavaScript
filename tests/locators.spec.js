//const { test, expect } = require('@playwright/test');
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=> {
	await page.goto('https://www.demoblaze.com/');

    //click on login button - property
    //await page.locator('id=login2').click();
    await page.click('#login2');
   

    //provide user name - CSS
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol');
    //await page.type('#loginusername', 'pavanol');

    //provide password - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on Login button
    await page.click("button[onclick='logIn()']");

    //Verify logout button visible
    const logOutLink = await page.locator('#logout2');
    await expect(logOutLink).toBeVisible();

    await page.close();


})