// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 Cypress.Commands.add('login1', (username) =>  {
    
    cy.log(username + " (AppAdm)")

    cy.get('[title="Accept Notice"]').click()
    cy.get('#username')
        .type(username)
    cy.get('.ui-menu-item')
        .click()
    cy.get('#signin')
        .click()
    cy.get('a:contains("Main")').should('be.visible')
        
 } )

