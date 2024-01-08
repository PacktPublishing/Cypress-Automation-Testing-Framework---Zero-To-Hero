describe('Common Assertion', () => {
    it('should understand default and common assertions in cypress', () => {

        // Length: Verify the number of elements:
        cy.get('css').should('have.length', 20);

        // Class: Verify whether the element has the expected class:
        cy.get('css').should('have.class', 'class name')
        cy.get('css').should('not.have.class', 'disabled')

        // Verify element has a specific value:
        cy.get('css').should('have.value', 'value string')

        // Verify element has an expected text:
        cy.get('css').should('contain', 'text value')
        cy.get('css').should('not.contain', 'text value')
        cy.get('css').should('have.text', 'text value')
        cy.get('css').should('include.text', 'text value')

        // Verify element is visible or not:
        cy.get('css').should('be.visible')
        cy.get('css').should('not.be.visible')

        // Verify element doesn't exists in the DOM:
        // This is important and a good interview question
        cy.get('#loadingicon').should('not.exist')

        // Verify state of radiobuttons and checkboxes:
        cy.get('css').should('be.checked')
        cy.get('css').should('not.be.checked')

        // Verify CSS characteristics of element:
        cy.get('css').should('have.css', 'name')
        cy.get('css').should('not.have.css', 'display', 'hidden')
    })
  })