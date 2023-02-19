import { last } from "lodash"

class NavigationBar{

constructor(){

    // LEFT NAV
        this.switchTo = '.pull-left'
        this.navBar = 'a[title="TSHARP"]'
        this.homePage = 'p:contains("Home")'

}
navigateToHomePage()
{  
    return cy.get(this.homePage)
}

navigateToResourcesPage()
{
    this.openSchedulerMenu();
    return cy.contains('Resources') 
}

navigateToGroundEvents()
{
    this.openSchedulerMenu();
    return cy.contains('Ground Events') 
}

openSchedulerMenu(){
   return cy.contains('Scheduler').click()
}
openuserInfoMenu(){
    return cy.get('a.text-white').last().click()
 }

 navigateToSignOutMenu()
{
    this.openuserInfoMenu();
    
    return cy.contains('Sign Out').click()
}

}

export default NavigationBar