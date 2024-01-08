describe('Iframe Demo', () => {

  it('should work with elements inside iframe', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#courses-iframe').then(($frame) => {
      const searchField = $frame.contents().find('input[id="search"]')
      cy.wrap(searchField).type('selenium')
    })
    cy.get('#name').type('Outside Iframe')
  })
})