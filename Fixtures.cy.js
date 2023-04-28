

describe('MyTestSuite', () => {

  // //Direct access
  // it.only('FixturesDemoTest', () => {
  //   cy.visit("https://opensource-demo.orangehrmlive.com")

  //   cy.fixture('orangehrm').then((data) => {

  //     cy.get("input[placeholder='Username']").type(data.username)
  //     cy.get("input[placeholder='Password']").type(data.password)
  //     cy.get("button[type='submit']").click()

  //     cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  //     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)

  //   })
  // })

  let user
  
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      user = data
    })
  })

  //Access through Hook - for multiple "it" blocks
  it('FixturesDemoTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.get("input[placeholder='Username']").type(user.username)
    cy.get("input[placeholder='Password']").type(user.password)
    cy.get("button[type='submit']").click()

    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', user.expected)

  })
})
