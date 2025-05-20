const { expect } = require("@playwright/test");
const logger = require("./LoggerUtils");

class AssertionUtilities {

   
    
    static async BasicAssertion(locator, page) {
        page=page;
        const element = page.locator(locator);
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
        await expect(element).not.toBeDisabled();
       // await expect(element).toBeEditable().catch((error=>
          // {
          //   logger.warn('href is not editable'+error)
          // }));
    }
}

module.exports = AssertionUtilities; // ✅ Correct way
