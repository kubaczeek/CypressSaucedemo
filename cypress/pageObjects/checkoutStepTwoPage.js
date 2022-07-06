Cypress.Commands.add("finishByBtn", () => {
    checkoutStepTwo.finishBtn().click()
})

class checkoutStepTwo {
    static finishBtn = () => cy.get('[data-test="finish"]')
}
export default checkoutStepTwo