const { test, expect } = require('@playwright/test');

test('Soft Assertions', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');

//Hard assertions - the execution of test will stop at the first failed assertion
    // await expect(page).toHaveTitle('STORE123') //('STORE')
    // await expect(page).toHaveURL("https://www.demoblaze.com/");
    // await expect(page.locator('.navbar-brand')).toBeVisible();

//Soft assertions - the execution of test will continue after the first failed assertion
    await expect.soft(page).toHaveTitle('STORE123') //('STORE')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();





})