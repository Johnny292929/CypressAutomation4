/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
import LoginPage from '../pageObjects/LoginPage'
import navBar from '../pageObjects/NavigationBar'

const loginPage = new LoginPage()


describe('Login', function()
{

  before(function(){

    cy.fixture('data').then(function(data){
    
        this.data = data
        
        cy.log(this.data.name)


        //cy.visit("/")
        cy.visit(Cypress.env('host'))

    })  
  })

//const loginPage2 = new LoginPage2()

  it('Login/Logout', function(){ 
    loginPage.acceptBttn().click()
    loginPage.getUserNameInput().type(this.data.name)
    loginPage.getUserNameSelect().click()
    loginPage.signInBttn().click()
    // JAN 7 2023
    // IF LOGGED IN....NEXT TIME GO THROUGH ADVANCED EXAMPLES
    // JUST SIT MORE HOURS ON HERE AND ALSO DO GIT/AZURE DEV/OPS PIPELINE
  cy.get('a:contains("Main")').should('be.visible')
  // Test These Two
 //cy.contains('contains("Main")').should('exist')
 
 cy.get('a:contains("Main")').should('contain.text', 'Main')


 

  }) 


  
})


// Next time fixtures
//before each, before, aftereach, after

// Next Time Do Menu items, Navigation

  