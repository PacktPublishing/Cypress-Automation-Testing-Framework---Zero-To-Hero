describe('Within Command Details', () => {
    it('should learn within command details', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('button')

      cy.get('#open-window-example-div').within(() => {
        cy.get('button')
      }).should('have.id', 'open-window-example-div')

    })
  })