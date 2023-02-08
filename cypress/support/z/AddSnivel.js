/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
import navigationBar from '../pageObjects/NavigationBar'
import ResourcesPage from '../pageObjects/ResourcesPage'
const resourcesPage = new ResourcesPage()
const navBar = new navigationBar()
const peopleList = resourcesPage.peopleList

//slowCypressDown(2000)

describe('Login', function()
{

  beforeEach(function(){
    cy.fixture('data').then(function(data){
        cy.visit("/")
        cy.login1("Jack Andrews")
    })  
  })

  afterEach(function () {
    navBar.navigateToSignOutMenu()
  })

it('Add Snivel', function(){ 

navBar.navigateToResourcesPage().click()

resourcesPage.newBttn().click() 

resourcesPage.snivelSel().click()

resourcesPage.peopleSel().click()
  .type("A").get(peopleList)
  .contains(peopleList, 'Anderson').click()
  
resourcesPage.peopleSel().click()
  .type('{enter}')

resourcesPage.assignBttn().click()
  cy.contains('Save').click()

  })

  
})



  