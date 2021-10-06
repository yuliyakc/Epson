import CommonElements from "../../CommonElements";
import printersData from "../../../data/printers";

class SearchActions {
    searchInkPrinterPLP(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.inkJet.name);
        //cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    searchDotPrinterPLP(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.dotMatrix.name);
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    searchLaserPrinters(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.laserPrinters.name);
        //cy.get(CommonElements.idModal_AcceptCookies).click();
    };
}
export default SearchActions