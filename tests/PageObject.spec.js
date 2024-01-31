import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('POM test', async ({ page }) => {

    // Login class
    const login = new LoginPage(page); // Pass the 'page' object to the constructor

    await login.gotoLoginPage();
    await login.login('pavalon', 'test@123');

    await page.waitForTimeout(3000);

    //Home class

    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await home.gotoCart();

    //Cart class
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);
    


});
