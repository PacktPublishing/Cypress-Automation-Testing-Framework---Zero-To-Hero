export class LoginPage {
    navigateToLogin() {
        cy.visit('https://www.letskodeit.com/login')
    }

    enterEmailAddress(email) {
        cy.get('#email').type(email)
    }

    enterPassword(password) {
        cy.get('#login-password').type(password)
    }

    clickLoginButton() {
        cy.get('#login').click()
    }

    verifyEmailRequiredError() {
        cy.get('.error').should('have.text', 'The email field is required.')
    }

    verifyInvalidCredentialsError() {
        cy.get('.dynamic-text.help-block').should('have.text', 'Your username or password is invalid. Please try again.')
    }

    loginToApp(email, password) {
        login.enterEmailAddress(email)
        login.enterPassword(password)
        login.clickLoginButton()
    }

    title() {
        return cy.title()
    }
}
export const login = new LoginPage()