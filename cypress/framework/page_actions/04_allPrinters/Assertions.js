import CommonElements from "../../CommonElements";
import CheckoutElements from "../../locators/05_checkout/CheckoutElements";
import usersData from "../../../data/users";
import SignUpElements from "../../locators/01_userSign/SignUpElements";
import FiltersElements from "../../locators/04_allPrinters/FiltersElements";
import filtersData from "../../../data/filters";

class Assertions {
    checkConsumablePage(){
      cy.get(CheckoutElements.cssBlock_ConsumablesPage).should("be.visible");
    };
    checkCheckoutSection(){
        cy.get(CheckoutElements.cssBlock_SecureSection).should("be.visible");
    };
    checkSelectedCountry(){
      cy.get(CommonElements.cssStaticField_Country).should("have.value", usersData.purchase.country)
    };
    checkThankYouPageAfterPurchasing(){
        cy.get(CommonElements.cssStatic_ThankYouPage).should("be.visible");
    }
    checkOrderInfoBlockIsVisible(){
      cy.get(CommonElements.cssBlock_OrderBlock).should("be.visible");
    };
    checkErrorMessageWhenRegister(){
      cy.xpath(SignUpElements.xpathError_IncorrectRegisterData).should("be.visible");
    };
    checkErrorWhenLogin(){
        cy.xpath(SignUpElements.xpathError_IncorrectLoginData).should("be.visible");
    };
    checkActiveDotFilters(){
        cy.get(CommonElements.cssBlock_ActiveFilter)
            .children()
            .should('contain', filtersData.info.name)
            .and('contain', filtersData.info.priceFromTo);
    };
    // checkActiveFilter(){
    //     cy.get(CommonElements.cssBlock_ActiveFilter).eq(0).should("be.visible");
    // };
    checkInkQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("have.length",  11);
    };
    checkDotMatrixQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("have.length",  3);
    };
    checkSecondPageIsOpened(){
        cy.url()
            .should("include", "page=1");
    };
    checkThirdPageIsOpened(){
        cy.url()
            .should("include", "page=2");
    };


}
export default Assertions