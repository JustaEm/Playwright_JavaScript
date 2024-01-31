const { test, expect } = require('@playwright/test');
// const exp = require('constants');
// const { hasUncaughtExceptionCaptureCallback } = require('process');

test('Multiple checkboxes', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    //await page.locator('#country').selectOption({label: 'Australia'}); //visible text
    // await page.locator('#country').selectOption('Australia'); //visible text
    
    // await page.locator('#country').selectOption({value: 'australia'}); //invisible InnerText
    // await page.locator('#country').selectOption({index: 5}); //using index number of the element 

    // await page.locator('#country').selectOption('#country', 'Australia') // by text

    
    //Assertions
    // Check number of options in dropdown -> Approach 1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);
    
    // Check number of options in dropdown -> Approach 2
    //const options = await page.$$('#country option')
    //console.log('Number of options:', options.length)
    // await expect(options.length).toBe(10);

    //Check presence of value in the dropdown - Approach 1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('Australia')).toBeTruthy();
    
    //Check presence of value in the dropdown - Approach 2 - using looping
    // const options = await page.$$('#country option')
    // let status = false;
    // for(const option of options) 
    // {
    //     //console.log(await option.textContent())
    //     let value = await option.textContent();
    //     if(value.includes('Australia'))

    //     {
    //         status=true;
    //         break;
    //     }
    // }

    // expect(status).toBeTruthy();


    //Select option from dropdown using loop
    const options = await page.$$('#country option')
    for(const option of options) 
    {
        
        let value = await option.textContent();
        if(value.includes('Australia'))

       {
            await page.selectOption('#country', value);
            break;
        }
     }

    
    await page.waitForTimeout(4000);




})