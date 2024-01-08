describe('Click Demo', () => {
    it('should understand various options of click method', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      // Default: Click the center of the element
      cy.get('#opentab').click()
      // cy.get('#opentab').click('topLeft')
      // cy.get('#opentab').click('top')
      // cy.get('#opentab').click('topRight')
      // cy.get('#opentab').click('left')
      // cy.get('#opentab').click('right')
      // cy.get('#opentab').click('bottomLeft')
      // cy.get('#opentab').click('bottom')
      // cy.get('#opentab').click('bottomRight')


      // .click() accepts an x and y coordinate
      // cy.get('#opentab').click(2, 3).click(20, 10)

      // Ignore error checking
      // cy.get('#hide-textbox').click()
      // cy.get('#displayed-text').click({force: true})
      // cy.get('#displayed-text').click()

      // Click multiple elements
      // cy.get("input[type='checkbox'][name='cars']").click({multiple: true})

      // Scroll Behavior
      // cy.get('#mousehover').click({scrollBehavior: 'top'})

    })
  })