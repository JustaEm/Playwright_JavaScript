const { test, expect } = require('@playwright/test');

test('Locating Multiple Elements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // Fix the XPath selector syntax by correcting the closing square bracket
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }
});
