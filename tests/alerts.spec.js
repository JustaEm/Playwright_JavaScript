//Alerts are auto-dismissed by playwright, but you can register a dialog handler before the action
const {test, expect} = require('@playwright/test')

test.skip('Alerts', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enable alert handling
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click("button[onclick='myFunctionAlert()']");
    await page.waitForTimeout(5000);
    
})

    test.skip('Confirmation Dialog with OK cancel', async({page})=> {

        await page.goto('https://testautomationpractice.blogspot.com/')
    
        //Enable dialog windonw handler
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            await dialog.accept();//Close by using OK button
            //await dialog.dismiss(); //Close by using Cancel button


        })
    
        await page.click("button[onclick='myFunctionConfirm()']");
        await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')


        await page.waitForTimeout(5000);

    });
    
    
    test('Prompt Dialog', async({page})=> {

        await page.goto('https://testautomationpractice.blogspot.com/')
    
        //Enable dialog windonw handler
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')
            expect(dialog.defaultValue('Harry Potter'))
            await dialog.accept('John Doe'); //Inserts a new value into input before it closes it


        })
    
        await page.click("button[onclick='myFunctionPrompt()']");
        await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John Doe! How are you today?')





});