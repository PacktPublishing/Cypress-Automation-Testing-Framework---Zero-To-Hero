describe('Chain Commands Demo ', () => {
    it('should learn chain commands details', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('button').eq(1).should('contain', 'Open Window')

      cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')

    })
  })