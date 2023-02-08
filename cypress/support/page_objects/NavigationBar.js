import { last } from "lodash"

class NavigationBar{

constructor(){

    // LEFT NAV
        this.switchTo = '.pull-left'
        this.navBar = 'a[title="TSHARP"]'
        this.homePage = 'p:contains("Home")'

    // SCEDULER NAVIGATION
        //this.schedulerMenu = 'Scheduler'
        //this.resourcesPage = 'Resources'  

    // USER INFO 
        //this.userInfo = 'a.text-white'

    // SIGN OUT
       // this.sightOutMenu = 'a[title="Sign Out]'

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