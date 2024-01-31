const { test, expect } = require('@playwright/test');
// const { log } = require('console');
// const exp = require('constants');

test('AssertionsTest', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    //Expect page to have URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //Expect page to have a Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //Expect Element to be visible
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //Expect locator to be enabled
    const searchStoreBox = await page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    //Expect locator to be checked
    const femaleRadioButton = await page.locator('#gender-female');
    await femaleRadioButton.click();
    await expect(femaleRadioButton).toBeChecked();

    //Expect locator to have attribute
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');

    //Expect locator to have text (UI element text = innerText)
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    //Expect locator to contain text (partially enough)
    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    //Expect locator to have value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    //Expect locator to have count
    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13)



});