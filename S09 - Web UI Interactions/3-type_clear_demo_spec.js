describe('Type And Clear Demo', () => {
    it('should understand various options of type and clear methods', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      // Type And Clear Examples:
      // Syntax 1
      cy.get('#name').type("Let's Kode It")
      

      // Syntax 2 With Options
      // Force
      cy.get('#disabled-button').click()
      // cy.get('#enabled-example-input').type("Let's Kode It")
      // cy.get('#enabled-example-input').type("Let's Kode It", {force: true})

      // Delay
      // cy.get('#name').clear()
      // cy.get('#name').type("Let's Kode It", {delay: 1000})

      // parseSpecialCharSequences
      cy.get('#name').clear()
      cy.get('#name').type("abcd{backspace}")
      cy.wait(2000)
      cy.get('#name').type("{backspace}")
      cy.get('#name').type("{selectall}{backspace}", {parseSpecialCharSequences: true})
      cy.get('#name').type("abcd{backspace}", {parseSpecialCharSequences: false})
      
    })
  })