const { expect } = require("allure-playwright");
const AssertionUtilities = require("../utils/AssertionUtilities");
const logger = require("../utils/LoggerUtils");
const dp=require('../utils/dataprovider.json')

exports.checkoutpage=
class checkoutpage
{

    constructor(page)
    {
      
        this.page=page;
        this.companyName="[name='BillingNewAddress.Company']";
        this.companynamelable="BillingNewAddress_Company";
        this.cityName="#BillingNewAddress_Address1";
        this.address2="#BillingNewAddress_Address2";
        this.zipCode="#BillingNewAddress_ZipPostalCode";
        this.phoneNo ="#BillingNewAddress_PhoneNumber";
        this.FaxNo ="#BillingNewAddress_FaxNumber";
        this.continuebtn="[value='Continue']";
        this.countrdrpdwn="#BillingNewAddress_CountryId";
        this.statesdrpdwn="#BillingNewAddress_StateProvinceId";
        this.city="#BillingNewAddress_City";
        this.finalmsgEl="//div[@class='title']";
        this.confrmbtn="[value='Confirm']";

    }
  

    async checkoutAddress(cmpny,city1,city2,state,zip,phone,fax)
    {
          await this.page.waitForLoadState();
          await AssertionUtilities.AssertUrl(this.page,'https://demowebshop.tricentis.com/onepagecheckout')
          await this.page.locator(this.companyName).fill(cmpny);
          await this.page.selectOption(this.countrdrpdwn,{index:41});
          await this.page.selectOption(this.statesdrpdwn,{index:0});
          await this.page.locator(this.city).fill(city1);
          await this.page.locator(this.cityName).fill(city2);
          await this.page.locator(this.address2).fill(state);
          await this.page.locator(this.zipCode).fill(zip);
          await this.page.locator(this.phoneNo).fill(phone);
          await this.page.locator(this.FaxNo).fill(fax);
          await this.page.waitForTimeout(2000);
          await this.page.locator(this.continuebtn).nth(0).click();
          await this.page.locator(this.continuebtn).nth(1).click();
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continuebtn).nth(2).click();
          await this.page.locator(this.continuebtn).nth(3).click();
          await this.page.waitForTimeout(1000);
          await this.page.locator(this.continuebtn).nth(4).click();
          await this.page.locator(this.confrmbtn).click();
          let val=await this.page.locator(this.finalmsgEl).textContent();
         console.log(val);


          await AssertionUtilities.TextValidation(this.finalmsgEl,dp.fmsg,this.page)

    }
     
    
    async validationsOnCheckoutFunctionality() {
      

      try {

          logger.info('Assertions on Checkout Address Page started')
        await this.page.selectOption('#billing-address-select','New Address');
        await  AssertionUtilities.BasicAssertion(this.companyName,this.page)
        await  AssertionUtilities.BasicAssertion(this.address2,this.page)
        await  AssertionUtilities.BasicAssertion(this.zipCode,this.page)
        await  AssertionUtilities.BasicAssertion(this.phoneNo,this.page)
        await  AssertionUtilities.BasicAssertion(this.FaxNo,this.page)
       
        await AssertionUtilities.BasicAssertion(this.city,this.page)
        await  AssertionUtilities.BasicAssertion(this.cityName,this.page)
        logger.info('Assertions on Checkout Address Page ended');


   } catch (error) {
       logger.error('Assertions on Checkout Address Page Failed'+error.message)
    }
         
     }

};