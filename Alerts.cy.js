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

    it('Js confirm alert - OK', ()=> {

      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

      cy.get("button[onclick='jsConfirm()']").click();

      cy.on('window:confirm',(t) => {
        chai.expect(t).to.contains('I am a JS Confirm');
      })

      // cypress automatically closed alert window by using ok buttons-default
      cy.get("#result").should('have.text', 'You clicked: Ok')

    })

    it('Js confirm alert - Cancel', ()=> {

      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

      cy.get("button[onclick='jsConfirm()']").click();

      cy.on('window:confirm',(t) => {
        chai.expect(t).to.contains('I am a JS Confirm');
      })

      cy.on('window:confirm', () => false); // cypress closes alert window using cancel button

      cy.get("#result").should('have.text', 'You clicked: Cancel')

    })

  // 3) Javascript Promp Alert: It will have some text with a box for user input along with 


  it('Js prompt alert', ()=> {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win) => {
      cy.stub(win,'prompt').returns('welcome');
    })

    cy.get("button[onclick='jsPrompt()'").click()

    //cypress will automatically close prompted alert - It'll use OK button - by default

    cy.get("#result").should('have.text', 'You entered: welcome')

  })
  
  it('Js prompt alert', ()=> {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win) => {
      cy.stub(win,'prompt').returns('welcome');
    })

    cy.get("button[onclick='jsPrompt()'").click()

    // cy.on('window:prompt', () => false); // cypress closes alert window using cancel button

    cy.get("#result").should('have.text', 'You entered: welcome')

  })

  // 4) Authenticated Alert

  it.only('Authenticated alert - 1st approach', () => {

    const payload = {
      auth : {
        username: "admin",
        password: "admin"
      }
    }

    cy.visit("https://the-internet.herokuapp.com/basic_auth", payload)

    cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
  })

  it('Authenticated alert - 2th approach', () => {

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth/")

    cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
  })

})

