//Use debugger in the SelectorsHub to freeze the screen and grab a locator

const {test, expect} = require('@playwright/test')

test('Using debugger for capturing locators', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    //Click on dropdown:
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]")

    //Waiting for options on debugger
    await page.waitForTimeout(5000);

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options)

    {
        const jobTitle = await option.textContent();
        //console.log(jobTitle);

        if(jobTitle.includes('Software Engineer'))
        {
            await option.click();
            break;
        }

    }

})

