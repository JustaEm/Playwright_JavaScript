const {test, expect} = require('@playwright/test');

test('Dates', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.fill('#datepicker', '03/15/2024')

    //date picker
    const year = '2024'
    const month = 'April'
    const date = '15'

    await page.click('#datepicker') //opens calendar

    while(true)

    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
    
        if(currentYear == year && currentMonth == month)

        {
            break;
        }

        await page.locator('[title="Next"]').click() //Next
    
    }

    const dates = await page.$$("//a[@class='ui-state-default']")


//Finding a date using loop
    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==date)
    //     {
    //         await dt.click()
    //     }
    // }

    //date selection - using expath + value filter

    await page.click(`//a[@class='ui-state-default'] [text()='${date}']`)

    await page.waitForTimeout(4000);


});