
const AssertionUtilities = require("../utils/AssertionUtilities");
const logger = require("../utils/LoggerUtils");
const { expect } = require("@playwright/test");

exports.productPage=
class productPage
{

    constructor(page)
    {
         this.page=page;
         this.productlink="(//h2[@class='product-title'])[6]";
         this.processor="#product_attribute_75_5_31_96";
         this.prodAddtocart="#add-to-cart-button-75";
         this.shoppingcartlink="//li[@id='topcartlink']//a[@href='/cart']";
         this.countryDrpDwn="#CountryId";
         this.stateDrpDown="#StateProvinceId";
         this.zipcode="#ZipPostalCode";
         this.tosbox="#termsofservice";
         this.checkout="#checkout";
         
         
    }

    async buyingProduct()
    {
        await this.page.waitForSelector("(//h2[@class='product-title'])[6]");
        await AssertionUtilities.BasicAssertion(this.productlink,this.page).then(()=>{
        logger.info('Assertion on Add to productlink  Successfuly passed')})
        
        await this.page.locator(this.productlink).click();
      

        await this.page.locator(this.processor).check();
         await AssertionUtilities.BasicAssertion(this.processor,this.page).then(()=>{
        logger.info('Assertion on processor are Successfuly passed')})

        expect(this.page.locator(this.prodAddtocart)).toBeVisible();

        await this.page.on('dialog', async(dialog)=>{
            console.log('fond the alert')
            console.log(dialog.message())
           await dialog.dismiss()
        })

        await this.page.locator(this.prodAddtocart).nth(0).click()
         await AssertionUtilities.BasicAssertion(this.prodAddtocart,this.page).then(()=>{
        logger.info('Assertion on Add tocart  Successfuly passed')})
        await this.page.waitForTimeout(1000);
        await AssertionUtilities.BasicAssertion(this.shoppingcartlink,this.page).then(()=>{
        logger.info('Assertion on shopping cart Successfuly passed')})
        await this.page.locator(this.shoppingcartlink).click();
        
        await this.page.selectOption(this.countryDrpDwn,{index:1});
        await this.page.selectOption(this.stateDrpDown,{index:0});
        await this .page.locator(this.zipcode).fill('444809');
         await AssertionUtilities.BasicAssertion(this.zipcode,this.page).then(()=>{
         logger.info('Assertion on zip code Successfuly passed')})

        await this.page.locator(this.tosbox).check();
        await AssertionUtilities.BasicAssertion(this.tosbox,this.page).then(()=>{
         logger.info('Assertion on tos box Successfuly passed')})

        await this.page.locator(this.checkout).click();
       
    }

  
}