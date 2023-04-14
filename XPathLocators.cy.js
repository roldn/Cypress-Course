describe('XPathLocators', () => {
  it('find no of products', () => {
    cy.visit("https://automationpractice.com/index.php")
    cy.xpath("//ul[@id='homefeatured']/li").should('have.length', 7) 
    cy.xpath("//ul[@id='homefeatured']").xpath('./li').should('have.length', 7) 
  })
})