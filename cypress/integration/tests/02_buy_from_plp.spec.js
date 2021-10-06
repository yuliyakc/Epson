import CommonActions from "../../framework/CommonActions";
import CheckoutActions from "../../framework/page_actions/05_checkout/CheckoutActions";
import Assertions from "../../framework/page_actions/04_allPrinters/Assertions";
import SearchActions from "../../framework/page_actions/09_search/SearchActions";

const commonActions = new CommonActions();
const assertions = new Assertions();
const checkoutActions = new CheckoutActions();
const searchActions = new SearchActions();


describe("Login and buy a printer", ()=> {

    it('should login and buy a printer from PLP using credit card', function () {
        commonActions.openWebsite();
        cy.viewport(1200, 800);
        commonActions.confirmAllCookies();
        commonActions.clickCreateNewAccountBtn();
        commonActions.enterEmailToLogin();
        commonActions.enterPasswordToLogin();
        commonActions.clickLogInBtn();
        searchActions.searchInkPrinterPLP();
        commonActions.clickBuyNowBtn();
        //commonActions.confirmAllCookies();
        assertions.checkConsumablePage();
        commonActions.clickCheckoutBtn();
        commonActions.clickCheckoutBtnOnBasketPage();
        assertions.checkCheckoutSection();
        assertions.checkSelectedCountry();
        checkoutActions.fillRequiredInfoInCart();
        checkoutActions.searchAndSetAnAddress();
        checkoutActions.saveAndGoToNextStep();
        checkoutActions.setShippingMethodAndNextToBilling();
        checkoutActions.saveAndGoToNextStep();
        // checkoutActions.agreeTermsAndPlaceAnOrder();
        cy.selectCardToPay();
        checkoutActions.setCardName();
        checkoutActions.goNext();
        checkoutActions.agreeTermsAndPlaceAnOrder();
        assertions.checkThankYouPageAfterPurchasing();
        assertions.checkOrderInfoBlockIsVisible();
    });
});

// cy.get("input[value='klarna']").click();
// cy.xpath("//button[contains(text(),'Next')]").click()