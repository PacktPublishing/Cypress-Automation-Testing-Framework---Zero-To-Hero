describe('Double And Right Click Demo', () => {
    it('should understand various options of double click and right click methods', () => {
      cy.visit('https://courses.letskodeit.com/practice')

      // Double Click Examples
      // cy.get('#opentab').dblclick()
      // cy.get('#opentab').dblclick('topLeft')

      // .dblclick() accepts an x and y coordinate
      // cy.get('#opentab').dblclick(2, 3).click(20, 10)

      // Ignore error checking
      // cy.get('#hide-textbox').dblclick()
      // cy.get('#displayed-text').dblclick({force: true})
      // cy.get('#displayed-text').dblclick()

      // Click multiple elements
      // cy.get("input[type='checkbox'][name='cars']").dblclick({multiple: true})

      // Scroll Behavior
      // cy.get('#mousehover').dblclick({scrollBehavior: 'nearest'})

      // Right Click Examples
      // cy.get('#opentab').rightclick()


      // .rightclick() accepts an x and y coordinate
      

      // Ignore error checking
      

      // Click multiple elements
      

      // Scroll Behavior
      
    })
  })