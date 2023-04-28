import Login from "../PageObjects/LoginPage2"

describe('pom', () => {

  // General approach
  it('LoginTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', "Dashboard")
  })

  
  // Using Page Object Class
  it('LoginTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  })

   
  // Using Page Object Class - with fixtures
  it.only('LoginTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.fixture('forLoginWithPom', (data) => {
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin(data.expected);
    })

  })
})
