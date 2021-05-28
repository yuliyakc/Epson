describe('Cypress Tests', () => {
    let emailForCode;

    it('Buy Now PLP', () => {
        cy.fixture('secret').then((secretData) => {
            cy.visit(secretData.epsonHomePageUK);
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/login"]').eq(2).click();
            cy.get('a[tabindex="0"]').eq(1).click();
            cy.get('input[id="register.firstName"]').type(secretData.FirstName);
            cy.get('input[id="register.lastName"]').type(secretData.LastName);
            secretData.lastEmailNum = parseInt(secretData.lastEmailNum) + 1;