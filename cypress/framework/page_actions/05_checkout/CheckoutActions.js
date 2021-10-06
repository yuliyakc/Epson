import CheckoutElements from "../../locators/05_checkout/CheckoutElements";
import usersData from "../../../data/users";
import CommonElements from "../../CommonElements";

class CheckoutActions {
    fillRequiredInfoInCart(){
        cy.get(CheckoutElements.idInput_Nickname).click().clear().type(usersData.purchase.addressNickname);
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Telephone).click().clear().type(usersData.purchase.telephone);
        cy.get(CheckoutElements.idInput_CompanyName).click().clear().type(usersData.purchase.companyName);
    };
    // setAddressManually(){
    //     cy.get(CheckoutElements.cssButton_AddAddressManually).click();
    //     cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
    //     cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
    //     cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode)
    // };
    searchAndSetAnAddress(){
        let addressBox = cy.get(CheckoutElements.idInput_AddressFinder);
        cy.get("body").then($body => {
            if ($body.find(CheckoutElements.idInput_AddressFinder).length > 0) {
                //evaluates as true if button exists at all
                cy.get(CheckoutElements.idInput_AddressFinder).then($header => {
                    if ($header.is(':visible')){
                        addressBox.click().type(usersData.purchase.addressFinder);
                    } else {
                        cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
                        cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
                        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode)
                    }
                });
            } else {
                //you get here if the button DOESN'T EXIST
                assert.isOk('everything','everything is OK');
            }
        });

        // if (cy.get(CheckoutElements.idInput_AddressFinder).should('be.visible')) {
        //         addressBox.click().type(usersData.purchase.addressFinder);
        //     }
        //     else{
        //         cy.get("input[id='line-1']").click({timeout:2000}).type("test")
        // }
    };
    saveAndGoToNextStep(){
      cy.get(CheckoutElements.cssButton_SaveAndContinue).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    setShippingMethodAndNextToBilling(){
      cy.get(CheckoutElements.idButton_SubmitDeliveryMethod).click();
      //  cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    setCardName(){
       cy.get(CheckoutElements.cssInput_CardName).click().clear().type("John Doe")
    };
    goNext(){
      cy.get(CheckoutElements.cssButton_ToNextStep).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    agreeTermsAndPlaceAnOrder(){
        cy.get(CheckoutElements.cssCheckbox_AgreeTerms).click();
        cy.get(CheckoutElements.cssButton_PlaceAnOrder).click();
    };
    cssButton_PlaceAnOrder


}
export default CheckoutActions