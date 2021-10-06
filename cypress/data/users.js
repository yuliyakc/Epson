const UNIQID = Cypress.env('UNIQID')

module.exports = {
    "register": {
        "firstName" : "Test",
        "lastName" : "User",
        "email": `maria.bobrova+${UNIQID}@keenethics.com`,
        "password": "Qwe123456!",
    },
    "purchase": {
        "country" : "GB",
        "addressNickname": "test",
        "telephone": "+442079460000",
        "companyName": "Test company",
        "addressFinder": "Notting Hill, Ellery Drive{enter}",
        "shippingAddress": "123 Watermarque",
        "address2" : "100 Browning Street",
        "town": "Birmingham",
        "postcode" : "B16 8GZ",
    }
}