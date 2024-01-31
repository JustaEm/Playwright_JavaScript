const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async({page})=> {
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click();
    //1.
    // const options = await page.locator('ul>li label input');
    // await expect(options).toHaveCount(11);

    //2.
    // const option = await page.$$('ul>li label input');
    // await expect(option.length).toBe(11);

    //3. Select options from dropdown
    // const options = await page.$$('ul>li label')

    // for(let option of options)
    // {
    //     const value = await option.textContent();
    //     //console.log('Value is:', value);
    //     if(value.includes('Angular')||value.includes('Oracle'))

    //     {
    //         await option.click();
    //     }
    // }


    //4. Deselect options if there are already by deafault selected
    const options = await page.$$('ul>li label')

    for(let option of options)
    {
        const value = await option.textContent();
        //console.log('Value is:', value);
        if(value.includes('HTML') || value.includes('CSS'))

        {
            await option.click();
        }
    }




    await page.waitForTimeout(5000);




})