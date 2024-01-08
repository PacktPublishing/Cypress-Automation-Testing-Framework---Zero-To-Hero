describe('Child Tabs Demo', () => {
    
  it('verify href attribute', () => {
      cy.visit('https://www.letskodeit.com/practice')

      cy.get('#opentab')
        .should('have.attr', 'href')
        .and('include', '/courses')
  })

  it('should visit the new tab, removing target attribute', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('include', '/courses')

    cy.get('input[id="search"]').type('selenium')
    cy.get('button[class="find-course search-course"]').click()
})

  it('should visit the new tab, without removing target attribute', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#opentab').then(newTab => {
      const hrefTab = newTab.prop('href')

      cy.visit(hrefTab)
      cy.url().should('include', '/courses')

      cy.get('input[id="search"]').type('selenium')
      cy.get('button[class="find-course search-course"]').click()
    })
    cy.go('back')
  })
})