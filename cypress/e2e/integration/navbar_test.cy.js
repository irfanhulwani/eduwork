/// <reference types = "cypress"/>

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#online-banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.')
        cy.get('p').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.get('#faq-link').should('contain.text', 'Frequently Asked Questions')
        cy.get('h3').should('be.visible')
    });

    it('Should display homepage content', () =>{
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('strong').should('contain.text', 'Online Banking')
        cy.get('strong').should('contain.text', 'Feedback')
    });
})