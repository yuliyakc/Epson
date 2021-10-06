import CommonElements from "./CommonElements";
import printersData from "../data/printers";
import BuyNowElements from "./locators/04_allPrinters/BuyNowElements";
import CheckoutElements from "./locators/05_checkout/CheckoutElements";
import usersData from "../data/users";
import FiltersElements from "./locators/04_allPrinters/FiltersElements";

class CommonActions {
    enterEmailToLogin(){
        cy.get(CommonElements.idInput_Email).click().type(usersData.register.email);
    };
    enterPasswordToLogin(){
        cy.get(CommonElements.idInput_Password).click().type(usersData.register.password);
    };
    clickLogInBtn(){
        cy.get(CommonElements.idBtn_Login).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    }
    confirmAllCookies(){
      cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    clickCreateNewAccountBtn(){
      cy.get(CommonElements.cssButton_CreateAccount).click();
     // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openWebsite(){
        cy.visitWebsite("/");
    };

    clickBuyNowBtn(){
        cy.get(BuyNowElements.cssButton_BuyNowButton).click();
        //cy.wait(2000);
    };
    clickCheckoutBtn(){
      cy.get(CheckoutElements.cssButton_Checkout).click();
     // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    clickCheckoutBtnOnBasketPage(){
        cy.get(CheckoutElements.cssButton_BasketCheckout).click()
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    clickSignOutBtn(){
      cy.get(CommonElements.cssButton_SignOut).click();
        //cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    resetFilters(){
      cy.get(CommonElements.cssButton_ResetFilter).eq(0).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openWebsiteAndLogin(){
        cy.visitWebsite("/");
        cy.viewport(1200, 800);
        cy.get(CommonElements.idModal_AcceptCookies).click();
        cy.get(CommonElements.cssButton_CreateAccount).click();
        //cy.get(CommonElements.idModal_AcceptCookies).click();
        cy.get(CommonElements.idInput_Email).click().type(usersData.register.email);
        cy.get(CommonElements.idInput_Password).click().type(usersData.register.password);
        cy.get(CommonElements.idBtn_Login).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openProductListingPage(){
        cy.get(FiltersElements.cssButton_PrintersList).eq(2).click();
    };


}
export default CommonActions