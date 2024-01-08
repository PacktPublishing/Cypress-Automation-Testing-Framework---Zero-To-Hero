describe('Implicit Assertion', () => {
    it('should understand implicit assertions in cypress', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('#product')
      .should('have.class', 'table-display')
      .and('be.visible')
      .find('tbody tr:nth-child(2)')
      .find('td')
      .last()
      .should('contain', '35')
      .and('have.text', '35')
      .and('have.class', 'price')
    })
  })