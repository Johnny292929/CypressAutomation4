/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
// slowCypressDown(2000)

import LoginPage from '../pageObjects/LoginPage'


import navigationBar  from '../../support/page_objects/NavigationBar'
import ResourcesPage from '../../support/page_objects/ResourcesPage'
import { timesSeries } from 'async'

const resourcesPage = new ResourcesPage()
const navBar = new navigationBar()
const peopleList = resourcesPage.peopleList



describe('Login', function()
{
  
  beforeEach(function(){
    cy.fixture('DATA').then((data) => {
        cy.visit("/")
       // cy.visit(Cypress.env('host'))
        cy.login1(data.name)
  
    })  
  })

  afterEach(function () {

    navBar.navigateToSignOutMenu() //

  })

it('Add Snivel', function(){  

navBar.navigateToResourcesPage().click()

//debugger
//cy.pause()
resourcesPage.newBttn().click()

resourcesPage.snivelSel().click()

resourcesPage.peopleSel().click()
  .type("A").get(peopleList)
  .contains(peopleList, 'Alfano').click()

resourcesPage.peopleSel().click()
  .type('{enter}')
  
resourcesPage.assignBttn().click()
  cy.contains('Save').click()


  })

  
})



  