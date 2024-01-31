import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})


test('Test2', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})

test('Test3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})

//Execute the cmd lines + change in config.js

/* CONFIG.JS
reporter: [['list'],
['html'],
['allure-playwright', {outputFolder: 'my-allure-results'}],

],

npm i -D @playwright/test allure-playwright
npm install -g allure-commandline --save-dev
allure generate my-allure-results -o allure-report --clean

You may have issues with running scripts on your system. Change that in the powershell.*/
