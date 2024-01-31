const { test, expect } = require('@playwright/test');

test('Multiple checkboxes', async ({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

//Single checkbox assertion
    await page.locator("//input[@id='monday' and @type='checkbox']").check();    
    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).isChecked().toBeTruthy();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeFalsy();

//Multiple checkboxes
    const checkboxesLocators=[
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"

    ];

    for(const locator of checkboxesLocators) //Select multiple checkboxes
    {
        await page.locator(locator).check();        
    }

    await page.waitForTimeout(5000);


    for(const locator of checkboxesLocators) //Uncheck multiple checkboxes
    {
        if(await page.locator(locator).isChecked());
        {
        await page.locator(locator).uncheckcheck();        
        }
    }
    await page.waitForTimeout(5000);
    
})  