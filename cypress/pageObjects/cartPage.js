Cypress.Commands.add("goToCheckoutByBtn", () => {
    cartPage.checkoutBtn().click()
})

class cartPage {
    static nameHolder = () => cy.get('.inventory_item_name')
    static priceHolder = () => cy.get('.inventory_item_price')
    static checkoutBtn = () => cy.get('[data-test="checkout"]')
}
export default cartPage