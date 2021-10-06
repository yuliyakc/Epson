import SignUpElements from "../../locators/01_userSign/SignUpElements";
import usersData from "../../../data/users";
import CommonElements from "../../CommonElements";

class SignUpActions {

    enterRequiredDataForRegistration(){
      cy.get(SignUpElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
      cy.get(SignUpElements.idInput_LastName).click().clear().type(usersData.register.lastName);
      cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email);
      cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email);
      cy.get(SignUpElements.iddInput_Password).click().clear().type(usersData.register.password);
      cy.get(SignUpElements.idInput_ConfirmPassword).click().clear().type(usersData.register.password);
    };
    enterIncorrectDataForRegistration(){
        cy.get(SignUpElements.idInput_FirstName).click().type("qwe");
        cy.get(SignUpElements.idInput_LastName).click().type("qwertty");
        cy.get(SignUpElements.idInput_Email).click().type("qwe@");
        cy.get(SignUpElements.idInput_ConfirmEmail).click().type("qwe@");
        cy.get(SignUpElements.iddInput_Password).click().type(usersData.register.password);
        cy.get(SignUpElements.idInput_ConfirmPassword).click().type(usersData.register.password);
    };
    setCustomerTypePersonal(){
      cy.get(SignUpElements.idRadio_PersonalType).click();
    };
    setMarketingConsentYes(){
      cy.get(SignUpElements.idCheckbox_MarketingConsent).click();
    };
    setAgeRequirements(){
      cy.get(SignUpElements.idCheckbox_UnderageNo).click();
    };
    setTermsOfUse(){
      cy.get(SignUpElements.idCheckbox_TermsCheck).click();
    };
    submitAndRegister(){
        cy.get(SignUpElements.cssButton_Submit).click();
        //cy.get(CommonElements.idModal_AcceptCookies).click()
    };

}
export default SignUpActions