const { expect } = require("allure-playwright");
const AssertionUtilities = require("../utils/AssertionUtilities");
const logger = require("../utils/LoggerUtils");

exports.checkoutpage=
class checkoutpage
{

    constructor(page)
    {
        this.page=page;
        this.companyName="[name='BillingNewAddress.Company']";
        this.cityName="#BillingNewAddress_Address1";
        this.address2="#BillingNewAddress_Address2";
        this.zipCode="#BillingNewAddress_ZipPostalCode";
        this.phoneNo ="#BillingNewAddress_PhoneNumber";
        this.FaxNo ="#BillingNewAddress_FaxNumber";
        this.continuebtn="[value='Continue']";
        this.countrdrpdwn="#BillingNewAddress_CountryId";
        this.statesdrpdwn="#BillingNewAddress_StateProvinceId";
        this.city="#BillingNewAddress_City";
        this.finalmsg="//div[@class='title']";
        this.confrmbtn="[value='Confirm']";

    }
  

    async checkoutProcedure()
    {
        await this.page.waitForLoadState();
        await this.page.selectOption('#billing-address-select','New Address');
          await this.page.locator(this.companyName).fill('tcs');
          await this.page.selectOption(this.countrdrpdwn,{index:41});
         await this.page.selectOption(this.statesdrpdwn,{index:0});
         await this.page.locator(this.city).fill('Mycity');
          await this.page.locator(this.cityName).fill('Pune');
          await this.page.locator(this.address2).fill("Maharastra");
          await this.page.locator(this.zipCode).fill('444809');
          await this.page.locator(this.phoneNo).fill("1234567890");
          await this.page.locator(this.FaxNo).fill('123442');
          await this.page.waitForTimeout(2000);
          await this.page.locator(this.continuebtn).nth(0).click();
          await this.page.locator(this.continuebtn).nth(1).click();
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continuebtn).nth(2).click();
          await this.page.locator(this.continuebtn).nth(3).click();
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continuebtn).nth(4).click();
          await this.page.locator(this.confrmbtn).click();
           let val=await this.page.locator(this.finalmsg).textContent();
         console.log(val);

    }
     
    
    async validationsOnCheckoutFunctionality() {
      

      try {

          logger.info('Assertions on Checkout Address Page started')
        await  AssertionUtilities.BasicAssertion(this.companyName,this.page)
        await    AssertionUtilities.BasicAssertion(this.address2,this.page)
        await  AssertionUtilities.BasicAssertion(this.zipCode,this.page)
        await  AssertionUtilities.BasicAssertion(this.phoneNo,this.page)
        await  AssertionUtilities.BasicAssertion(this.FaxNo,this.page)
       
        await AssertionUtilities.BasicAssertion(this.city,this.page)
        await  AssertionUtilities.BasicAssertion(this.cityName,this.page)
          logger.info('Assertions on Checkout Address Page ended')


   } catch (error) {
           logger.error('Assertions on Checkout Address Page Failed'+error.message)
    }
         
     }

};