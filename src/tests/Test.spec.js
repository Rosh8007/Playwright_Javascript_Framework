const {test,expect}=require ("@playwright/test");
const { productPage }=require("../pages/productPage");
const{checkoutpage}=require("../pages/checkoutpage");
const logger =require("../utils/LoggerUtils.js");
const LoginPage = require("../pages/LoginPage");
const dp=require("../utils/dataprovider.json")



test('EndToEnd User Flow & Common Assertions', async({page})=>
{
 logger.info('LoginPage Testing started');
    const logobj=new LoginPage(page);
    await  logobj.gotoLoginUrl(dp.url);
    await logobj.OpenLoginForm();
    await  logobj.LoginFunctionality(dp.username, dp.password);
    await logobj.completeLogin();
 logger.info('LoginPage Testing started');
   

    logger.info('Products Testing started');
    const prodobj=new productPage(page);
     await prodobj.buyingProduct();
  logger.info('Products Testing Ended');
    

    logger.info('Checkout Testing started');
     const checkoutObj=new checkoutpage(page);

     await checkoutObj.validationsOnCheckoutFunctionality();

     await  checkoutObj.checkoutAddress(
      dp.company,dp.address1,dp.address2,dp.state,dp.zip,dp.phone,dp.fax
    );
     logger.info('Checkout Testing started');


});


