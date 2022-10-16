/// <reference types = "cypress"/>

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });
    
    it('Should try to login with invalid data', () =>{
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })

    it('Should try to login with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()
            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    })

    it('Logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('h4').should('contain.text', 'Online Banking')
        cy.get('strong').should('contain.text', 'Feedback')
        cy.get('#account_activity_link').should('contain.text', 'Checking Account Activity')
    })

})