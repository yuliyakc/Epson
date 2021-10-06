import CommonActions from "../../framework/CommonActions";
import FiltersActions from "../../framework/page_actions/04_allPrinters/FiltersActions";
import CommonAsserts from "../../framework/CommonAsserts";
import SearchActions from "../../framework/page_actions/09_search/SearchActions";
import Assertions from "../../framework/page_actions/04_allPrinters/Assertions";
import PaginationActions from "../../framework/page_actions/04_allPrinters/PaginationActions";
import SortingActions from "../../framework/page_actions/04_allPrinters/SortingActions";

const commonActions = new CommonActions();
const filtersActions = new FiltersActions();
const commonAsserts = new CommonAsserts();
const searchActions = new SearchActions();
const assertions= new Assertions();
const paginationActions = new PaginationActions();
const sortingActions = new SortingActions();


describe("Checking pagination and sorting on PLP", ()=> {

    it('should check that pagination working correct for PLP', function () {
        commonActions.openWebsiteAndLogin();
        searchActions.searchInkPrinterPLP();
        commonAsserts.checkMainProductsQuantity();
        paginationActions.clickTopPaginationButtonNext();
        assertions.checkSecondPageIsOpened();
        paginationActions.clickTopPaginationButtonNext();
        assertions.checkThirdPageIsOpened();
        paginationActions.clickTopPaginationButtonPrev();
        assertions.checkSecondPageIsOpened();
    });
    it('should check that sorting working correct for PLP', function () {
        commonActions.openWebsiteAndLogin();
        commonActions.openProductListingPage();
        filtersActions.useLabelMakerPrinters();
        sortingActions.selectSortingPriceAscending();


    });
});
