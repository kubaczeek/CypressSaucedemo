const SESSION_USERNAME = "standard_user"
const COOKIE_NAME = "session-username"

Cypress.Commands.add("fillLoginFormAndLogIn", (data) => {
    login.email().clear().type(data['username'])
    login.password().clear().type(data['password'])
    login.signInButton().click()
})

Cypress.Commands.add("checkCookie",  () => {
    cy.getCookie(COOKIE_NAME).should('have.property', 'value', SESSION_USERNAME)
})

Cypress.Commands.add("logInWithoutData", () => {
    login.signInButton().click()
})

class login {
    static email = () => cy.get('#user-name')
    static password = () => cy.get('#password')
    static signInButton = () => cy.get('#login-button')
    static messageContainer = () => cy.get('.error-message-container')

}
export default login