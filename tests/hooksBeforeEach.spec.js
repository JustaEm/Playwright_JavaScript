import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');

    // Login (move to beforeAll if login is not needed for every test)
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("[onclick='logIn()']").click();
});

test.afterEach(async () => {
    // Logout after each test
    await page.locator('#logout2').click();
});

test('Home Page Test', async () => {
    // HomePage
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
});

test('Add product to the cart', async () => {
    // Add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator('.btn.btn-success.btn-lg').click();

    // Handle window pop-up message
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept(); // Close alert window
    });
});
