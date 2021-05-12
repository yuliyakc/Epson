describe('Cypress Tests', () => {

    it('Sign Up/ Sign In', () => {
        cy.fixture('secret').then((secretData) => {
            cy.visit(secretData.epsonHomePageUK);
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/login"]').eq(2).click();
            cy.get('a[tabindex="0"]').eq(1).click();
            cy.get('input[id="register.firstName"]').type(secretData.FirstName);
            cy.get('input[id="register.lastName"]').type(secretData.LastName);
            secretData.lastEmailNum = parseInt(secretData.lastEmailNum) + 1;
            console.log(secretData.lastEmailNum);
            cy.writeFile('./cypress/fixtures/secret.json', JSON.stringify(secretData));
            let emailForCode = secretData.email.replace("@", "+" + secretData.lastEmailNum + "@");
            cy.get('input[id="register.email"]').type(emailForCode);
            cy.get('input[id="register.confirmEmail"]').type(emailForCode);
            cy.get('input[id="password"]').type(secretData.pass);
            cy.get('input[id="register.checkPwd"]').type(secretData.pass);
            cy.get('.radio-group__section').eq(0).click();
            cy.get('.checkbox').eq(1).click();
            cy.get('.checkbox').eq(2).click();
            cy.get('button[type="submit"]').eq(4).click();
            cy.wait(2000);
            cy.visit(secretData.epsonHomePageUK);
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/logout"]').eq(1).click();
            cy.get('.navigation__btn').eq(0).click();
            cy.get('a[href="/en_GB/login"]').eq(2).click();
            cy.get('a[tabindex="0"]').eq(0).click();
            cy.get('input[id="j_username"]').type(emailForCode);
            cy.get('input[id="j_password"]').type(secretData.pass);
            cy.get('button[type="submit"]').eq(3).click();
        });
    });

    // it('Sign in', () => {
    //     cy.fixture('secret').then(({ email, pass, epsonHomePageUK }) => {
    //         cy.visit(epsonHomePageUK);
    //         cy.get('.navigation__btn').eq(0).click();
    //         cy.get('a[href="/en_GB/login"]').eq(2).click();
    //         cy.get('a[tabindex="0"]').eq(0).click();
    //         cy.get('input[id="j_username"]').type(email);
    //         cy.get('input[id="j_password"]').type(pass);
    //         cy.get('button[type="submit"]').eq(3).click();
    //     });
    // });
});
