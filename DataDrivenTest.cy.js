

describe('MyTestSuite', () => {

  it('DataDrivenTest', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.fixture("orangehrm2").then((data) => {
      data.forEach(user => {
        cy.get("input[placeholder='Username']").type(user.username)
        cy.get("input[placeholder='Password']").type(user.password)
        cy.get("button[type='submit']").click()

        if (user.username == 'Admin' && user.password == 'admin123') {
          cy.get(':nth-child(2) > .oxd-main-menu-item').click()
          cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', user.expected)
          cy.get('.oxd-userdropdown-tab').click()
          cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click()
        }
        else{
          cy.get('.oxd-alert-content > .oxd-text').should('have.text', user.expected)
        }
      });
    })

  })
})
