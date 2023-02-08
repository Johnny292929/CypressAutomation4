
class ResourcesPage{


    constructor(){

    //RESOURCES PAGE
        this.newButton ='button:contains("New")'

    // SNIVEL PAGE
        this.snivelSelect ='Snivel'
        this.peopleSelect ='#DefaultComboBoxInputId'
        this.assignButton ='#AssignDefaultListNameButtonId-0-0'
        this.peopleList ='li > a > span'

    }

newBttn()
{
    return cy.get(this.newButton)
}

// SNIVEL 
snivelSel()
{
    return cy.contains(this.snivelSelect)
}

personnelGroupsSel()
{
   // return cy.contains(this.personnelGroups)
}

peopleSel()
{

return cy.get(this.peopleSelect)

}


assignBttn()
{
    return cy.get(this.assignButton)
}

}


export const onResourcesPage = new ResourcesPage()