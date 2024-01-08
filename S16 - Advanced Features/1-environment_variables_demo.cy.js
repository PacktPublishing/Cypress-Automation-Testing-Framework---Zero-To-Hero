describe('Environment Variables Demo', () => {

  const cred = {
    user: Cypress.env('username'),
    password: Cypress.env('password')
  }

    it('should login to app using valid credentials', () => {
      cy.visit(Cypress.env('url') + '/login')
      cy.login(cred.user, cred.password)
      cy.get('#dropdownMenu1').click()
      cy.contains('Logout').click()
    })
  })