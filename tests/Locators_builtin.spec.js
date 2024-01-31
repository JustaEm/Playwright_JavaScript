const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Built-in Locators', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get element by Alt Text
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //get element by placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //get element by role
    await page.getByRole('button', {type: 'submit'}).click();
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();





})