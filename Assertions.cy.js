describe('XPathLocators', () => {
  it('Implicit assertions', () => {
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    cy.url()
    .should('include', 'orangehrmlive.com')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrm')
  

    cy.url()
    .should('not.include', 'xxxxxx')
    .and('not.eq', 'xxxxxxx')
    .and('not.contain', 'xxxxxxxxx')
  
    cy.title()
    .should('include', 'Orange')
    .and('eq', 'OrangeHRM')
    .and('contain', 'HRM')

    cy.get('.orangehrm-login-branding > img').should('exist').and('be.visible')

    cy.xpath("//a").should('have.length', '5') //number of links

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Username']").should('have.value', 'Admin')
  })
  
  it('Explicit assertions', () => {
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName="Paul Collings"
    cy.get(".oxd-userdropdown-name").then((x)=>{
      let actName = x.text()

      //BDD Style
      chai.expect(actName).to.equal(expName)
      chai.expect(actName).to.not.equal(expName)

      //TDD Style
      chai.assert.equal(actName,expName)
      chai.assert.notEqual(actName,expName)
    })
  })
})
