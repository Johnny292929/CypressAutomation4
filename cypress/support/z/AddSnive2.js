/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
import { navigateTo } from "../../support/page_objects/navigationPage"
import { onLoginPage } from "../../support/page_objects/loginPage"
import { onResourcesPage } from "../../support/page_objects/resourcesPage"
import navigationBar from '../../support/page_objects/NavigationBar'
import ResourcesPage from '../../support/page_objects/ResourcesPage'

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
   // navBar.navigateToSignOutMenu()
  })

it('Add Snivel 2', function(){ 

  
navBar.navigateToResourcesPage().click()
//navigateTo.resourcesPage()

onResourcesPage.newBttn.click()

resourcesPage.newBttn().click()

onResourcesPage.snivelSel().click()

onResourcesPage.peopleSel().click()
  .type("A").get(peopleList)
  .contains(peopleList, 'Anderson').click()
  
  onResourcesPage.peopleSel().click()
  .type('{enter}')

  onResourcesPage.assignBttn().click()
  cy.contains('Save').click()

  })

  
})



  