const {test, expect} = require('@playwright/test')

test('Upload a file', async({page})=> {

    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload');

    await page.locator('.mqfihd-upload').click();
    await page.locator('#file-upload').setInputFiles('C:\Users\Justyna\Desktop\docs_test\Test1.txt')

    await page.waitForTimeout(5000);

})


test.only('Upload multiple files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForSelector('#filesToUpload');

    await page.locator('#filesToUpload').click();

    await page.locator('#filesToUpload')
        .setInputFiles(['C:\Users\Justyna\Desktop\docs_test\Test1.txt', 'C:\Users\Justyna\Desktop\docs_test\Test2.txt']);

    await page.waitForTimeout(3000);

    const firstFileText = await page.locator('#fileList li:nth-child(1)').innerText();
    const secondFileText = await page.locator('#fileList li:nth-child(2)').innerText();

    // Check if the received text contains the expected text
    expect(firstFileText).toContain('Test1.txt');
    expect(secondFileText).toContain('Test2.txt');

    await page.waitForTimeout(3000);

    //Removing files/confirming removal
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li')).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);

});
