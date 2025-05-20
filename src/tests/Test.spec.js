const {test,expect}=require ("@playwright/test");

const { productPage }=require("../pages/productPage");
const{checkoutpage}=require("../pages/checkoutpage");
const logger =require("../utils/LoggerUtils.js");
const LoginPage = require("../pages/LoginPage");



test.beforeEach('Login Setup', async ({page}) => {
    
    logger.info('LoginPage Testing started');
    const logobj=new LoginPage(page);
    await  logobj.gotoLoginUrl();
    await  logobj.LoginFunctionality('mymailtesting@gmail.com',"123456789");
});

test('EndToEnd User Flow', async({page})=>
{

    logger.info('Products Testing started');
    const prodobj=new productPage(page);
     await prodobj.buyingProduct();
  logger.info('Products Testing Ended');
    

    logger.info('Checkout Testing started');
     const checkoutObj=new checkoutpage(page);
     await  checkoutObj.checkoutProcedure();
     logger.info('Checkout Testing started');


});



test('Validations on Login Page', async ({page}) => {
    logger.info('Test for Validations of login page started');
    const login = new LoginPage(page);
    await login.gotoLoginUrl();
    await login.ValidationsOnLoginPage();

});

test('validation on cheout page',async({page})=>
  {
    

    logger.info('Products Testing started');
    const prodobj=new productPage(page);
     await prodobj.buyingProduct();
     logger.info('Products Testing Ended');

     logger.info('Checkout Testing started');
      let chekoutObj=new checkoutpage(page);
      await  chekoutObj.validationsOnCheckoutFunctionality()
        
  })
