import CommonActions from "../../framework/CommonActions";
import FiltersActions from "../../framework/page_actions/04_allPrinters/FiltersActions";
import CommonAsserts from "../../framework/CommonAsserts";
import SearchActions from "../../framework/page_actions/09_search/SearchActions";
import Assertions from "../../framework/page_actions/04_allPrinters/Assertions";

const commonActions = new CommonActions();
const filtersActions = new FiltersActions();
const commonAsserts = new CommonAsserts();
const searchActions = new SearchActions();
const assertions= new Assertions();


describe("Checking filter for all printers", ()=> {

    it('should check that filters are working correct for Ink Printer', function () {
        commonActions.openWebsiteAndLogin();
        searchActions.searchInkPrinterPLP();
        commonAsserts.checkMainProductsQuantity();
        filtersActions.useAppSegmentFilter();
        //commonActions.confirmAllCookies();
        commonAsserts.checkActiveFilter();
        commonActions.resetFilters();
        filtersActions.useCategoryFilter();
        assertions.checkInkQuantity();
    });
    it('should check that several filters shows correct result for Dot Printer', function () {
        commonActions.openWebsiteAndLogin();
        searchActions.searchDotPrinterPLP();
        commonAsserts.checkMainProductsQuantity();
        filtersActions.useIncludedSoftFilter();
       // commonActions.confirmAllCookies();
        filtersActions.usePriceFrom200Filter();
      //  commonActions.confirmAllCookies();
        assertions.checkActiveDotFilters();
        assertions.checkDotMatrixQuantity();
    });
    it('should check that filter is working correct for Laser Printer', function () {
        commonActions.openWebsiteAndLogin();
        searchActions.searchLaserPrinters();
        filtersActions.useClassificationFilter();
     //   commonActions.confirmAllCookies();
        commonAsserts.checkActiveFilter();
        commonAsserts.checkActiveFilter();
    });
    it('should check that filter is working correct for Laser Printer and clear filter', function () {
        commonActions.openWebsiteAndLogin();
        commonActions.openProductListingPage();
       // commonActions.confirmAllCookies();
        filtersActions.useLargeFormatPrinters();
     //   commonActions.confirmAllCookies();
        commonAsserts.checkActiveFilter();
        filtersActions.resetFilters();
     //   commonActions.confirmAllCookies();
        commonAsserts.checkActiveFilterIsAbsent();
     });
    it('should check that filter is working correct for Label Maker Printers', function () {
        commonActions.openWebsiteAndLogin();
        commonActions.openProductListingPage();
    //    commonActions.confirmAllCookies();
        filtersActions.useLabelMakerPrinters();
     //   commonActions.confirmAllCookies();
        commonAsserts.checkActiveFilter();
    });
});
