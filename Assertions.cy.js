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
  
  })

  it('Explicit assertions', () => {
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    cy.url()
    .should('include', 'orangehrmlive.com')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrm')
  

    cy.url()
    .should('not.include', 'xxxxxx')
    .and('not.eq', 'xxxxxxx')
    .and('not.contain', 'xxxxxxxxx')
  
  })
})