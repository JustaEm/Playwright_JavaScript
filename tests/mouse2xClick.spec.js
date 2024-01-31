const {test, expect} = require('@playwright/test');

test('Mouse 2x click', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const button = await page.locator("button[ondblclick='myFunction1()']")

    //2x click
    await button.dblclick()

    const field2 = await page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')


    
    await page.waitForTimeout(3000);

})


