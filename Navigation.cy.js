

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://demo.opencart.com/")
    cy.title().should('eq',"Your Store"); // Home Page
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('h2').should('have.text', 'Cameras') // Cameras

    // -------

    cy.go('back') // Go back to home
    cy.title().should('eq',"Your Store")

    cy.go('forward') // Go forward to cameras
    cy.get('h2').should('have.text', 'Cameras')

    // -------

    cy.go(-1) // Go back to home
    cy.title().should('eq', "Your Store")
    
    cy.go(1) // Go forward to cameras
    cy.get('h2').should('have.text', 'Cameras')

    // -------

    cy.reload()

  })
})
