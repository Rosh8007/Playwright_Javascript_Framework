const { expect } = require("@playwright/test");
const logger = require("./LoggerUtils");

class AssertionUtilities {

   
    
    static async BasicAssertion(locator, page) {
        page=page;
        const element =await page.locator(locator);
        let val =await element.textContent();
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        await expect(element).not.toBeDisabled();
        await expect(element).toBeEditable().catch((error=>
          {
            logger.warn('Element is not editable :'+val)
          }));
    }

    static async AssertUrl(page,url)
    {
          await expect(page).toHaveURL(url)
          .then(()=>{logger.info('Url assertion passed succesfully')})
          .catch((error)=>{logger.error('Application url assertion failed: '+error)});
    }

    static async TextValidation(loctr,msg,page)
    {
      const element= page.locator(loctr);
       await expect(element).toContainText(msg)	
    }

}

module.exports = AssertionUtilities;
