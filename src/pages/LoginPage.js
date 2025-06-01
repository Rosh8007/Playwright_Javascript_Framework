
const logger = require("../utils/LoggerUtils");
const { expect } = require("@playwright/test");
const AssertionUtilities = require('../utils/AssertionUtilities');




class LoginPage
{

    constructor(page)
    {
          this.page=page;
          this.loginhref="Log in";
          this.username="#Email";
          this.pasword="#Password";
          this.loginbutton="[value='Log in']";
    }

    async gotoLoginUrl(url)
    {
      await this.page.goto(url);
      await AssertionUtilities.AssertUrl(this.page,url)
      await this.page.waitForLoadState();
      
    }

    async OpenLoginForm()
    {
       let loglink=await this.page.getByRole('link',{name:this.loginhref})
         await loglink.click()
        .then(()=>{logger.info('Assertion on login btn passed')})
        .catch((error)=>{logger.info('Assertion in login btn failed '+error)});
       
    }

    async LoginFunctionality(un,ps)
    {
      try{
        await AssertionUtilities.BasicAssertion(this.username,this.page)
        .then(()=>{logger.info('Assertion Passed on username')});
        await this.page.locator(this.username).fill(un)
        await AssertionUtilities.BasicAssertion(this.pasword,this.page)
        .then(()=>{logger.info("Assertion Passed on password")});
        await this.page.locator(this.pasword).fill(ps)
      }
      catch(error){logger.info('Assertion in Login Functionality '+error)}
    }
   
  

   async completeLogin()
  {
     await AssertionUtilities.BasicAssertion(this.loginbutton,this.page)
     .then(()=>{logger.info('Assertion on login btn passed')})
     .catch((error)=>{logger.info('Assertion in login btn failed '+error)});
     await this.page.locator(this.loginbutton).click();
   }




};

module.exports=LoginPage