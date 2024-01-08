describe('Child Window Demo', () => {

  it('should open a new window with provided URL', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake(() => {
        win.location.href = 'https://www.letskodeit.com/courses'
      }).as('windowOpen')
    })
    
    cy.get('#openwindow').click()
    cy.get('@windowOpen').should('be.calledWith', 'https://www.letskodeit.com/courses')
    cy.get('input[id="search"]').type('selenium')
    cy.get('button[class="find-course search-course"]').click()

    cy.go('back')
  })
})