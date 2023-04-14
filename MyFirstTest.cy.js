

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  cy.title().should('eq','OrangeHRM')
  })
  it('fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  cy.title().should('eq','OrangeHRM123')
  })
})
