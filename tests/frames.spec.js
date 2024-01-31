const {test, expect} = require('@playwright/test')

test('Frames', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames = await page.frames()
    console.log('Number of frames on the page:', allFrames.length);

    // //Approach 1: using name or URL of the page
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("input[name='mytext1']", 'Hello');

    //Approach 2: using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputBox.fill('Hello');
    await page.waitForTimeout(4000);

});