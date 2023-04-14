describe('CSSLocators', () => {
  it("csslocators", ()=> {
    cy.visit("https://automationpractice.com/index.php")
    cy.get("#search_query_top").type("T-Shirts")
    cy.get("[name='submit_search']")
    cy.get(".lighter").contains("T-Shirts") //Assertion 
  })
})