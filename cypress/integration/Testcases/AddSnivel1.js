/// <reference types="cypress" />

//import { slowCypressDown } from 'cypress-slow-down'
//slowCypressDown(2000)

//import sqlServer from 'cypress-sql-server';
//sqlServer.loadDBCommands();

//import LoginPage from '../pageObjects/LoginPage'
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
        
      ///cy.visit(Cypress.env('host')) 
      
       this.data = data 
  
        cy.login1(this.data.name)
  
    })  
  })

  afterEach(function () {

    navBar.navigateToSignOutMenu() //

   
   
  })

it('Add Snivel', function(){  
  
navBar.navigateToResourcesPage().click()

//-- cy.lighthouse({
 // performance: 90,
  //'first-contentful-paint':3000,
 // 'largest-contentful-paint': 4000,
 // 'cumulative-layout-shift': 0.25
// })  

//cy.pause()


resourcesPage.newBttn().click()

resourcesPage.snivelSel().click()

resourcesPage.peopleSel().click()
  .type("A").get(peopleList)
  .contains(peopleList, this.data.peopleListItemName).click()
  
  cy.contains('Cancel').click()
debugger

  
  

//resourcesPage.assignBttn().click()
  //cy.contains('Save').click()
 // cy.contains('Cancel').click()
 

  })

  
})


  