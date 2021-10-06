import SignUpActions from "../../framework/page_actions/01_userSign/SignUpActions";
import CommonAsserts from "../../framework/CommonAsserts";
import CommonActions from "../../framework/CommonActions";
import Assertions from "../../framework/page_actions/04_allPrinters/Assertions";
import SignInActions from "../../framework/page_actions/01_userSign/SignInActions";

const signUpActions = new SignUpActions();
const commonAsserts = new CommonAsserts();
const commonActions = new CommonActions();
const assertions = new Assertions();

describe ("Register, logout and relogin", ()=> {

    it('should register new user, logout and relogin', function () {
        commonActions.openWebsite();
        cy.viewport(1200, 800);
        commonActions.confirmAllCookies();
        commonActions.clickCreateNewAccountBtn();
        signUpActions.submitAndRegister();
        assertions.checkErrorMessageWhenRegister();

        signUpActions.enterIncorrectDataForRegistration();
        commonAsserts.checkIncorrectEmailError();
        assertions.checkErrorMessageWhenRegister();

        signUpActions.enterRequiredDataForRegistration();
        signUpActions.setCustomerTypePersonal();
        signUpActions.setMarketingConsentYes();
        signUpActions.setAgeRequirements();
        signUpActions.setTermsOfUse();
        signUpActions.submitAndRegister();
        commonAsserts.checkThatUserIsRegistered();
        commonActions.clickSignOutBtn();
        commonAsserts.checkUserLogsOut();

        commonActions.confirmAllCookies();
        commonActions.clickCreateNewAccountBtn();
        commonActions.enterEmailToLogin();
        commonActions.enterPasswordToLogin();
        commonActions.clickLogInBtn();
    });
});