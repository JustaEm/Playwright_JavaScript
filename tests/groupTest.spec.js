//You need to use describe.test syntaxt in order to group tests

test.describe('Group1', ()=>{
    test('Test3', async({page})=>{
        console.log('This is test 3')
    })
    
    test('Test4', async({page})=>{
        console.log('This is test 4')
    })
})

