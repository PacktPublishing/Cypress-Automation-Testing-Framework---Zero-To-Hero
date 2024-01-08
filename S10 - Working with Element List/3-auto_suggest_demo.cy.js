describe('AutoSuggest Demo', () => {
    it('should understand how to work with auto suggest fields/dynamic dropdowns', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      cy.get('#autosuggest').then(autoListInput => {
        cy.wrap(autoListInput).type('Automation')

        cy.get('[class="ui-corner-all"]').each((el, index, $list) => {
          const itemText = el.text().trim()
          
          if (itemText == 'Cypress Automation') {
            cy.wrap(el).click()
          }
        })
    })

    
    cy.get('#autosuggest').clear().then((el => {
      cy.wrap(el).type('Automation')
    }))
    cy.get('[class="ui-corner-all"]').contains('Playwright Automation').click()

  })
})