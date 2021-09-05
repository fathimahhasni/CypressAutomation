// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq','http://bdd.atlasid.tech/');
        cy.url().then((url) => {
            expect(url).to.be.equal('http://bdd.atlasid.tech/');
        })
    })

    it('Type a Quote', () => {
        cy.get('#inputQuote').type('Ayumu Tenanan Ora Editan');
    })

    it('Select Colour', () => {
        cy.get('#buttonAddQuote').click();
    })
})
