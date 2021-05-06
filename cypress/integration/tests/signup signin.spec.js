describe('Cypress Tests', () => {

    it('Sign Up', () => {
        cy.fixture('secret').then(({ FirstName, LastName, email, pass, epsonHomePageUK }) => {
            cy.visit(epsonHomePageUK);
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/login"]').eq(2).click();
            cy.get('a[tabindex="0"]').eq(1).click();
            cy.get('input[id="register.firstName"]').type(FirstName);
            cy.get('input[id="register.lastName"]').type(LastName);
            cy.get('input[id="register.email"]').type(email);
            cy.get('input[id="register.confirmEmail"]').type(email);
            cy.get('input[id="password"]').type(pass);
            cy.get('input[id="register.checkPwd"]').type(pass);
            cy.get('.radio-group__section').eq(0).click();
            cy.get('.checkbox').eq(1).click();
            cy.get('.checkbox').eq(2).click();
            cy.get('button[type="submit"]').eq(4).click();
        });
    });

    it('Sign in', () => {
        cy.fixture('secret').then(({ email, pass, epsonHomePageUK }) => {
            cy.visit(epsonHomePageUK);
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/login"]').eq(2).click();
            cy.get('a[tabindex="0"]').eq(0).click();
            cy.get('input[id="j_username"]').type(email);
            cy.get('input[id="j_password"]').type(pass);
            cy.get('button[type="submit"]').eq(3).click();
        });
    });
});
