/// <reference types = "cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('free access {enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.contains('The following pages were found for the query: free access').should('be.visible')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
    })
})