import { login } from "../../support/pages/login_page"

describe('No Framework Test Suite', () => {

    beforeEach('This is beforeEach Hook', () => {
      login.navigateToLogin()
    })

    it('should login to app using valid credentials', () => {
      cy.login('test@email.com', 'abcabc')
      cy.get('#dropdownMenu1').click()
      cy.contains('Logout').click()
    })

    it('should not login to app using empty username', () => {
      login.loginToApp('{backspace}', 'abc')
      login.verifyEmailRequiredError()
    })

    it('should not login to app using invalid username/password combination', () => {
      login.loginToApp('test@email.com', 'abc')
      login.verifyInvalidCredentialsError()
    })
  })