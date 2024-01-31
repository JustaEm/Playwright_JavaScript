const {test, expect} = require('@playwright/test');

test('Mouse Hover', async({page})=> {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    
    const button = await page.locator('.context-menu-one.btn.btn-neutral')

    //right click on the button
    await button.click({button: 'right'})


    
    await page.waitForTimeout(4000);

})


