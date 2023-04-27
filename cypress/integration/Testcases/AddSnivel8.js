/// <reference types="cypress" />

//import { slowCypressDown } from 'cypress-slow-down'
//slowCypressDown(2000)

//import LoginPage from '../pageObjects/LoginPage'
import { navigateTo }  from '../../support/page_objects/navigationPage'
import { onResourcesPage } from '../../support/page_objects/resourcesPage'
//import { timesSeries } from 'async'

//const resourcesPage = new ResourcesPage()
//const navBar = new navigationBar()
//const peopleList = resourcesPage.peopleList



describe('Login', function()
{
  
  beforeEach(function(){
    cy.fixture('DATA').then((data) => {
        cy.visit("/")
       // cy.visit(Cypress.env('host')) 
       
       this.data = data
        cy.login1(this.data.name)
  
    })  
  })

  afterEach(function () {

    navBar.navigateToSignOutMenu() //

  })

it('Add Snivel', function(){  
  
//navigateTo.ResourcesPage()
navigateTo.resourcesPage()
onResourcesPage.addSnivel()


navBar.navigateToResourcesPage().click()

//debugger
//cypause()
//resourcesPage.newBttn().click()

//resourcesPage.snivelSel().click()

//resourcesPage.peopleSel().click()
  //.type("A").get(peopleList)
  //.contains(peopleList, this.data.peopleListItemName).click()

  //cy.contains('Cancel').click()
  

//resourcesPage.assignBttn().click()
  //cy.contains('Save').click()
 // cy.contains('Cancel').click()
 

  })

  
})


  