

describe('Handle tabs', () => {
  it('Approach1', () => {

    cy.visit('http://the-internet.herokuapp.com/windows') // parent tab
    
    cy.get('.example >a').invoke('removeAttr', 'target').click() // clicking on link
    
    cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new')

    cy.wait(5000)

    //operations 
    cy.go('back'); // back to parent tab
  })

  it.only('Approach2', () => {
    cy.visit('http://the-internet.herokuapp.com/windows')
    
    cy.get('.example >a').then((e)=>{
      let url = e.prop('href');
      cy.visit(url)
    })
    
    cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new')

    cy.wait(5000)

    //operations 
    cy.go('back'); // back to parent tab
  })
})
