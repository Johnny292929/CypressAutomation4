class LoginPage{

constructor(){
   //this.acceptButton = 'button[title="Accept Notice"]'
   //this.signInButton = '#signin'
  // this.userNameInput = '#username'
   //this.userNameSelect = '.ui-menu-item'

}
acceptBttn()
{
 
    return cy.get('button[title="Accept Notice"]')
}

signInBttn()
{
    
    return cy.get('#signin')

}

getUserNameInput()
{

  return  cy.get('#username')

}

getUserNameSelect(){

    return  cy.get('.ui-menu-item')
}

}

export default LoginPage



