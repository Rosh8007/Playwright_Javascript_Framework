# Test info

- Name: validation on cheout page
- Location: F:\CucumberProjects\project1\src\tests\Test.spec.js:41:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demowebshop.tricentis.com/onepagecheckout", waiting until "load"

    at checkoutpage.navigationToPage (F:\CucumberProjects\project1\src\pages\checkoutpage.js:27:25)
    at F:\CucumberProjects\project1\src\tests\Test.spec.js:44:20
```

# Test source

```ts
   1 | const AssertionUtilities = require("../utils/AssertionUtilities");
   2 | const logger = require("../utils/LoggerUtils");
   3 |
   4 | exports.checkoutpage=
   5 | class checkoutpage
   6 | {
   7 |
   8 |     constructor(page)
   9 |     {
  10 |         this.page=page;
  11 |         this.companyName="[name='BillingNewAddress.Company']";
  12 |         this.cityName="#BillingNewAddress_Address1";
  13 |         this.address2="#BillingNewAddress_Address2";
  14 |         this.zipCode="#BillingNewAddress_ZipPostalCode";
  15 |         this.phoneNo ="#BillingNewAddress_PhoneNumber";
  16 |         this.FaxNo ="#BillingNewAddress_FaxNumber";
  17 |         this.continuebtn="[value='Continue']";
  18 |         this.countrdrpdwn="#BillingNewAddress_CountryId";
  19 |         this.statesdrpdwn="#BillingNewAddress_StateProvinceId";
  20 |         this.city="#BillingNewAddress_City";
  21 |         this.finalmsg="//div[@class='title']";
  22 |         this.confrmbtn="[value='Confirm']";
  23 |
  24 |     }
  25 |     async navigationToPage()
  26 |     {
> 27 |         await this.page.goto('https://demowebshop.tricentis.com/onepagecheckout')
     |                         ^ Error: page.goto: Test ended.
  28 |     }
  29 |
  30 |     async checkoutProcedure()
  31 |     {
  32 |         await this.page.waitForLoadState();
  33 |         await this.page.selectOption('#billing-address-select','New Address');
  34 |           await this.page.locator(this.companyName).fill('tcs');
  35 |           await this.page.selectOption(this.countrdrpdwn,{index:41});
  36 |          await this.page.selectOption(this.statesdrpdwn,{index:0});
  37 |          await this.page.locator(this.city).fill('Mycity');
  38 |           await this.page.locator(this.cityName).fill('Pune');
  39 |           await this.page.locator(this.address2).fill("Maharastra");
  40 |           await this.page.locator(this.zipCode).fill('444809');
  41 |           await this.page.locator(this.phoneNo).fill("1234567890");
  42 |           await this.page.locator(this.FaxNo).fill('123442');
  43 |           await this.page.waitForTimeout(2000);
  44 |           await this.page.locator(this.continuebtn).nth(0).click();
  45 |           await this.page.locator(this.continuebtn).nth(1).click();
  46 |           await this.page.waitForTimeout(1000);
  47 |           await this.page.locator(this.continuebtn).nth(2).click();
  48 |           await this.page.locator(this.continuebtn).nth(3).click();
  49 |           await this.page.waitForTimeout(1000);
  50 |           await this.page.locator(this.continuebtn).nth(4).click();
  51 |           await this.page.locator(this.confrmbtn).click();
  52 |            let val=await this.page.locator(this.finalmsg).textContent();
  53 |          console.log(val);
  54 |
  55 |     }
  56 |      
  57 |     
  58 |     async validationsOnCheckoutFunctionality() {
  59 |       
  60 |
  61 |       try {
  62 |
  63 |           logger.info('Assertions on Checkout Address Page started')
  64 |         await  AssertionUtilities.BasicAssertion(this.companyName,this.page)
  65 |         await    AssertionUtilities.BasicAssertion(this.address2,this.page)
  66 |         await  AssertionUtilities.BasicAssertion(this.zipCode,this.page)
  67 |         await  AssertionUtilities.BasicAssertion(this.phoneNo,this.page)
  68 |         await  AssertionUtilities.BasicAssertion(this.FaxNo,this.page)
  69 |         await  AssertionUtilities.BasicAssertion(this.continuebtn,this.page)
  70 |         await AssertionUtilities.BasicAssertion(this.city,this.page)
  71 |         await  AssertionUtilities.BasicAssertion(this.cityName,this.page)
  72 |           logger.info('Assertions on Checkout Address Page ended')
  73 |
  74 |
  75 |    } catch (error) {
  76 |            logger.error('Assertions on Checkout Address Page Failed'+error.message)
  77 |     }
  78 |          
  79 |      }
  80 |
  81 | };
```