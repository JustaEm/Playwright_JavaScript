exports.HomePage = class HomePage{

    constructor(page) {

        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur'
    }
//Method 1
        async addProductToCart(productName) {
            const productList = await this.page.$$(this.productList);
            //const productList = await this.page.locator(this.productList).elements();

             for (const product of productList) {
                if(productName === await product.textContent()) {
                    await product.click()
                    break;
                }
             }

            await this.page.on('dialog', async dialog=> {
                if(dialog.message().includes('added')){
                    await dialog.accept();
                }
            })

            await this.page.locator(this.addToCartbtn).click()

        }
//Method 2
        async gotoCart() {
            await this.page.locator(this.cart).click();

        }

}