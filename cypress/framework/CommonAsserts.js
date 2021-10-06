import SignUpElements from "./locators/01_userSign/SignUpElements";
import filtersData from "../data/filters";
import CommonElements from "./CommonElements";
import FiltersElements from "./locators/04_allPrinters/FiltersElements";

class CommonAsserts {
    checkThatUserIsRegistered(){
        return cy.url()
            .should('include', '/?registered=true');
    };
    checkUserLogsOut(){
        return cy.url()
            .should('include', '/?loggedOut=true');
    };
    checkMainProductsQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("have.length",  15);
    };
    checkIncorrectEmailError(){
        cy.get(SignUpElements.cssText_EmailError).should("be.visible");
    };
    checkActiveFilter(){
        cy.get(CommonElements.cssBlock_ActiveFilter).eq(0).should("be.visible");
    };
    checkActiveFilterIsAbsent(){
        cy.get(CommonElements.cssBlock_ActiveFilter).should('not.exist')
    };
}
export default CommonAsserts