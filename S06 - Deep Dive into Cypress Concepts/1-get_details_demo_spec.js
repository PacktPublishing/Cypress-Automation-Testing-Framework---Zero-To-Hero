describe('Get Method Details', () => {
    it('should learn get() method details', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('input', {log: false})

      cy.get('input', {timeout: 12000})


    })
  })