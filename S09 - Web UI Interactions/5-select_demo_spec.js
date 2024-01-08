describe('Select Demo', () => {
    it('should understand various options of select methods', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      // Select Value
      cy.get('#carselect').select('benz')

      // Select Values
      cy.get('#multiple-select-example').select(['apple', 'orange'])
      
      // Select Value With Options
      cy.get('#carselect').select('bmw', {force: true})
    })
  })