class SortingActions {
    selectSortingPriceAscending(){
      cy.xpath("//select[@id='sortOptions1']").select("price-asc").should("have.value", "price-asc")
    };
}
export default SortingActions