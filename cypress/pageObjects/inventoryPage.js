Cypress.Commands.add("addBackpackToCart", () => {
    inventory.addBackpackToCartBtn().click()
})

Cypress.Commands.add("goToCartByBtn", () => {
    inventory.cartBtn().click()
})

class inventory {
    static addBackpackToCartBtn = () => cy.get('#add-to-cart-sauce-labs-backpack')
    static removeBackpackToCartBtn = () => cy.get('#remove-sauce-labs-backpack')
    static cartBtn = () => cy.get(".shopping_cart_link")
}
export default inventory