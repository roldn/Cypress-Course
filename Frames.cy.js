import 'cypress-iframe';

describe('Handle tabs', () => {
  it('Approach1', () => {

    cy.visit('http://the-internet.herokuapp.com/iframe')

    const iframe = cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)

    iframe.clear().type("Welcome {ctrl+a}")

    cy.get("[aria-label='Bold']").click();
  })

  it('Approach2 - using Custom Commands', () => {

    cy.visit('http://the-internet.herokuapp.com/iframe')

    cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")

    cy.get("[aria-label='Bold']").click();
  })
  
  it('Approach3 - using cypress-iframe plugin', () => {

    cy.visit('http://the-internet.herokuapp.com/iframe')

    cy.frameLoaded('#mce_0_ifr') // Load the frame 

    cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")

    cy.get("[aria-label='Bold']").click();
  })
})
