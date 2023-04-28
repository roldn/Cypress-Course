

describe('template spec', () => {
  it('Capture Screenshots & Videos', () => {

    cy.visit("https://demo.opencart.com/")

    // cy.screenshot("home_page")
    // cy.wait(2000)

    cy.get('#logo > a > .img-fluid').screenshot("logo")


    // Automatically capture screenshots & videos on failure
    // --- (only when you excecute through CLI) ---

    cy.get(':nth-child(7) > .nav-link').click();
    cy.get('h2').should('have.text', 'Tablets')

  })
})
