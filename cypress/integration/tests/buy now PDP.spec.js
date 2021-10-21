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
            console.log(secretData.lastEmailNum);
            cy.writeFile('./cypress/fixtures/secret.json', JSON.stringify(secretData));
            emailForCode = secretData.email.replace("@", "+" + secretData.lastEmailNum + "@");
            cy.get('input[id="register.email"]').type(emailForCode);
            cy.wait(1000);
            cy.get('input[id="register.confirmEmail"]').type(emailForCode);
            cy.wait(1000);
            cy.get('input[id="password"]').type(secretData.pass);
            cy.wait(1000);
            cy.get('input[id="register.checkPwd"]').type(secretData.pass);
            cy.wait(1000);
            cy.get('.radio-group__section').eq(0).click();
            cy.wait(2000);
            cy.get('.checkbox').eq(1).click();
            cy.wait(3000);
            cy.get('.checkbox').eq(2).click();
            cy.wait(3000);
            cy.get('button[type="submit"]').eq(4).click();
            cy.wait(2000);
            cy.get('.navigation__btn').eq(1).click();
            cy.get('input[name="text"]')
                .type('Expression Home XP-245')
                .type('{enter}')
            cy.wait(1000);
            //cy.get('button[id="addToCartButton"]').eq(0).click();
            cy.get('.btn').eq(10).click();
            cy.wait(1000);
            cy.get('.btn').eq(6).click();
            cy.get('input[name="quantity"]').clear();
            cy.wait(1000);
            cy.get('input[name="quantity"]').type('5');
            cy.wait(1000);
            cy.get('.btn').eq(5).click();
            cy.wait(1000);
            cy.scrollTo('center');
            cy.get('input[id="telephone"]').type('380676056305');
            cy.wait(1000);
            cy.get('input[id="address-finder"]').type('test');
            cy.wait(3000);
            let m = cy.get('.pcaitem').eq(2);
            m.click();
            cy.wait(1000);
            cy.get('.btn').eq(1).click();
            cy.get('.btn').eq(0).click();
            cy.scrollTo('bottom');
            cy.get('.checkbox__input ').eq(2).click();
            cy.get('.checkbox__input ').eq(3).click();
            cy.get('.btn').eq(1).click();
            cy.wait(3000);
            cy.get('.payment-method__radiobtn').eq(0).click({force: true});
            let ifCardNum = cy.getIframe('.js-iframe').eq(0);
            ifCardNum.find('#encryptedCardNumber').type('test');
            //cy.getIframe('.adyen-checkout__input-wrapper').eq(0).click().type(this.secret.card);
            //cy.frameLoaded('#iframe').eq(0);
            //cy.get('js-iframe').eq(0);
            //cy.get('.adyen-checkout__input-wrapper').eq(1).click().type('0330');
            //cy.get('.adyen-checkout__input-wrapper').eq(2).click().type('737');
            //cy.get('.adyen-checkout__input-wrapper').eq(0).click().type('5555 4444 3333 1111');
            //cy.getIframe('.adyen-checkout__input-wrapper').eq(3).click();
            //cy.getIframe('.adyen-checkout__input-wrapper').eq(0).click().type('4242424242424242');
            //cy.getWithinIframe('[name="exp-date"]').type('122024');
            //cy.getWithinIframe('[name="cvc"]').type('987');
            //cy.fillOutCreditCardForm({ number:'5555 4444 3333 1111', expiration:'03/30', code:'737'});
            //cy.getWithinIframe('input[id="encryptedCardNumber"]').type('4242424242424242');
            cy.get('.btn').click();
            cy.wait(3000);
            cy.get('.checkbox').eq(0).click();
            cy.get('.checkbox').eq(1).click();
            cy.wait(3000);
            //cy.get('.btn').click();
            //cy.get('.buttons-container').click();
            //test;
            cy.wait(3000);
        });
    });
});