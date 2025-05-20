
const logger = require("../utils/LoggerUtils");
const { expect } = require("@playwright/test");
const AssertionUtilities = require('../utils/AssertionUtilities');



class LoginPage
{

    constructor(page)
    {
          this.page=page;
          this.loginlink="[href='/login']";
          this.username="#Email";
          this.pasword="#Password";
          this.loginbutton="[value='Log in']";
    }

    async gotoLoginUrl()
    {
      await this.page.goto("https://demowebshop.tricentis.com/");
      await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/").then(()=>
        {
            logger.info('Url assertion passed succesfully');
         })
      .catch((error)=>
        {
          logger.error('Application url assertion failed: '+error);
        });
      await this.page.waitForLoadState();
    }

    async LoginFunctionality(un,ps)
    {
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(un)
        await this.page.locator(this.pasword).fill(ps)
        await this.page.locator(this.loginbutton).click()

    }

   

    async ValidationsOnLoginPage()
    {
        try {
       
          logger.info('Login  href Assertion started')
          await   AssertionUtilities.BasicAssertion(this.loginlink,this.page)
          logger.info('Login  href ended Assertion ended')
         
          await this.page.locator(this.loginlink).click().then(()=>{ logger.info('Login  href is clicked')})
            logger.info('Login Username Assertion started')
          await AssertionUtilities.BasicAssertion(this.username,this.page)
            logger.info('Login Username Assertion ended')
            logger.info('Login pasword Assertion started')
          await AssertionUtilities.BasicAssertion(this.pasword,this.page)
            logger.info('Login password Assertion ended')
            logger.info('Login btn Assertion started')
          await AssertionUtilities.BasicAssertion(this.loginbutton,this.page)
             logger.info('Login btn Assertion ended')
       
             logger.info('Login page Asertion Ended')
        } catch (error)
        {
          logger.error('Login Page Assertion Failed'+ error)
        }
       

    }





};

module.exports=LoginPage