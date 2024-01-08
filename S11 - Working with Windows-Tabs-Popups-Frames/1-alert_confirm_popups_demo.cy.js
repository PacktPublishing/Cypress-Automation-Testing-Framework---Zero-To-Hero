describe('Alert And Confirm Popups Demo', () => {
    
  it('should understand how to handle alert popup', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('#alertbtn').click()

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Hello , share this practice page and share your knowledge')
      })
      
  })

  it('should understand how to handle confirm popup accept', () => {
    cy.visit('https://courses.letskodeit.com/practice')

    cy.get('#confirmbtn').click()

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
      return true;
    })

    // cy.on('window:confirm', () => true)
    
  })

  it('should understand how to handle confirm popup cancel', () => {
    cy.visit('https://courses.letskodeit.com/practice')

    cy.get('#confirmbtn').click()

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
      return false;
    })

    // cy.on('window:confirm', () => false)
    
  })
})