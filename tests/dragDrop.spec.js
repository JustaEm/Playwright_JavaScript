const {test, expect} = require('@playwright/test');

test('Drag & Drop', async({page})=> {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    
    const drag = await page.locator('#box6')
    const drop = await page.locator('#box106')

    //Approach 1
    // await drag.hover()
    // await page.mouse.down
    
    // await drop.hover()
    // await page.mouse.up()

    //Approach 2
    await drag.dragTo(drop);
    
    await page.waitForTimeout(4000);

})


