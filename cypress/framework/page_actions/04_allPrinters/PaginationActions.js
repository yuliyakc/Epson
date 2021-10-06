import PaginationElements from "../../locators/04_allPrinters/PaginationElements";

class PaginationActions{
    clickTopPaginationButtonNext(){
      cy.get(PaginationElements.cssButton_TopNextPage).click();
    };
    clickTopPaginationButtonPrev(){
      cy.get(PaginationElements.cssButton_TopPrevPage).click();
    };
}
export default PaginationActions