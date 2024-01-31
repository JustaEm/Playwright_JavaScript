import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.tradelocker.com/trade');
  await page.goto('https://demo.tradelocker.com/auth/login?redirect=%2Ftrade');

  await page.locator('div').filter({ hasText: 'Cookies PolicyBy clicking “' }).nth(2).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  
  await page.getByPlaceholder('E-mail...').fill('crm.justyna@gmail.com');
  await page.getByPlaceholder('Password...').fill('4NNcWg@6');
  await page.getByLabel('Server').fill('OSP-DEMO');
  
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByLabel('Open menu').click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Log Out' }).click();
});