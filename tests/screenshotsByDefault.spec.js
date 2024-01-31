
//Using screenshot: 'on' in the playwright.config.js

import { test, expect } from '@playwright/test';

test('Testing screenshots by default', async ({page}) => {
   
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("[onclick='logIn()']").click();
});