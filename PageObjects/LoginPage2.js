class Login {

    userNameFieldLocator =  "input[placeholder='Username']";
    passwordFieldLocator = "input[placeholder='Password']";
    submitBtnLocator = "button[type='submit']";
    txtForCrificationLocator = '.oxd-topbar-header-breadcrumb > .oxd-text';

    setUserName(username){
        cy.get(this.userNameFieldLocator).type(username)
    }
    setPassword(password){
        cy.get(this.passwordFieldLocator).type(password)
    }
    clickSubmit(){
        cy.get(this.submitBtnLocator).click()
    }
    verifyLogin(expected){
        cy.get(this.txtForCrificationLocator).should('have.text', expected)
    }
}
export default Login;

// The Class contains the mathods that interact with the elements, that perform the actions.