describe('hanlde dropdowns', () => {

  // 1) Javascript Alert: It will have some text and an 'OK' button

    it('Js Alert', ()=> {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsAlert()']").click();

      cy.on('window:alert',(t) => {
        chai.expect(t).to.contains('I am a JS Alert')
      })

      // alert window automatically closed by cypress
      cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })

  // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons

    it('Js Alert', ()=> {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsConfirm()']").click();

      cy.on('window:confirm',(t) => {
        chai.expect(t).to.contains('I am a JS Confirm');
      })

      // cypress automatically closed alert window by using ok buttons-default
      cy.get("#result").should('have.text', 'You clicked: Ok')

    })

  // 3) Javascript Promp Alert: It will have some text with a box for user input along with 
  // 4) Authenticated Alert
})

