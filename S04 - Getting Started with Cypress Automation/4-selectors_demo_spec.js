
describe('Selector Playground', () => {
    it('should verify selector playground', () => {
      cy.visit('https://courses.letskodeit.com')
      cy.get('[data-id="41189"] > .dynamic-link').click()
    })
  })