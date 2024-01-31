const {test, expect} = require('@playwright/test');

test('Tables', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('#productTable')

    //1. Total number of columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count())
    expect(await columns.count()).toBe(4)
    
    //Total number of rows
    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count())    
    expect(await rows.count()).toBe(5)

    //2. Select check box for Product 4

    // const matchedRow = rows.filter({

    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })

    // matchedRow.locator('input').check()

    //3. Select multiple products by reusable functions
//     await selectProduct(rows, page, 'Product 1')
//     await selectProduct(rows, page, 'Product 3')
//     await selectProduct(rows, page, 'Product 5')
        



// })


// //4. Print all the products in the loop
// for(let i=0; i<await rows.count();i++) //rows

// {
//     const row = rows.nth(i);
//         const tds= row.locator('td')

//     for(let j=0; j<await tds.count()-1; j++) //columns
//     {
//         console.log(await tds.nth(j).textContent())
//     }
// }

//5. Read data from all the pages in the table

    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table: ', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
    
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
    
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(3000);
    }
    

    await page.waitForTimeout(3000);

})



async function selectProduct(rows, page, name) 
{

    const matchedRow = rows.filter({

        has: page.locator('td'),
        hasText: name         
    })
    
       await matchedRow.locator('input').check()




}
