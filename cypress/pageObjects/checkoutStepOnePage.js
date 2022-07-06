Cypress.Commands.add("fillCheckoutStepOneForm", (data) => {
    checkoutStepOne.firstNameInp().type(data['firstName'])
    checkoutStepOne.lastNameInp().type(data['lastName'])
    checkoutStepOne.zipCodeInp().type(data['zipCode'])
})

Cypress.Commands.add("continueByBtn", () => {
    checkoutStepOne.continueBtn().click()
})

class checkoutStepOne {
    static firstNameInp = () => cy.get('[data-test="firstName"]')
    static lastNameInp = () => cy.get('[data-test="lastName"]')
    static zipCodeInp = () => cy.get('[data-test="postalCode"]')
    static continueBtn = () => cy.get('[data-test="continue"]')

}
export default checkoutStepOne