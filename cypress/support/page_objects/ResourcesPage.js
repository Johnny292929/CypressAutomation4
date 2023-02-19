
class ResourcesPage{


    constructor(){
        this.peopleList ='li > a > span'   
    }

newBttn()
{
    return cy.get('button:contains("New")')
}

// SNIVEL 
snivelSel()
{
    return cy.contains('Snivel')
}

personnelGroupsSel()
{
   // return cy.contains(this.personnelGroups)
}

peopleSel()
{

return cy.get('#DefaultComboBoxInputId')

}

assignBttn()
{
    return cy.get('#AssignDefaultListNameButtonId-0-0')
}

}

export default ResourcesPage
