/// <reference types="cypress" />

//import { slowCypressDown } from 'cypress-slow-down'
//slowCypressDown(2000)

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

        
       // cy.visit(Cypress.env('host')) 

       this.data = data
      cy.login1(this.data.name)
  
    })  
  })

  afterEach(function () {

   

  })

it('Add Snivel', function(){  
  
//navBar.navigateToResourcesPage().click()
navBar.navigateToGroundEvents().click()
cy.contains('New').click()

cy.get('#GroundInstructorComboBoxInputId').click()
.type('a')

cy.get('#GroundInstructorComboBoxInputId').each($item => {
 
  cy.log($item)
  cy.log('xxxxxxxxxxxxxxxxxxxxxx')
 
  cy.wrap($item).should($e => {

    
     // expect($e.text()).to.eq("test")
  })
})



//cy.get('#list-assigned')
//cy.get('#GroundInstructorComboBoxInputId')
//  .find('li').each(($opn)=>{
    // const optionText = $opn.text()
    // const urlText = optionText.replace('.','_')

   //  cy.get('#version-select')
     //  .select(optionText)                 // select the option

     //cy.url().should("include", urlText)
    // cy.log(optionText)
  
 // })




//.type('a')
//-- cy.lighthouse({
 // perforamance: 90, 
  //'first-contentful-paint':3000,
 // 'largest-contentful-paint': 4000,
 // 'cumulative-layout-shift': 0.25
// }) 

//debugger
//cy.pause()
//resourcesPage.newBttn().click()

//resourcesPage.snivelSel().click()

//resourcesPage.peopleSel().click()
 // .type("A").get(peopleList)
 // .contains(peopleList, this.data.peopleListItemName).click()

//  cy.contains('Cancel').click()
  

//resourcesPage.assignBttn().click()
  //cy.contains('Save').click()
 // cy.contains('Cancel').click()
 

  })

  
})


  