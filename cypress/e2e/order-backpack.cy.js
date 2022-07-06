import login from '../pageObjects/loginPage'
import inventory from '../pageObjects/inventoryPage'
import cart from '../pageObjects/cartPage'
import checkoutStepOne from '../pageObjects/checkoutStepOnePage'
import checkoutStepTwo from '../pageObjects/checkoutStepTwoPage'
import checkoutCompleted from '../pageObjects/checkoutCompletedPage'

const TEXT_REMOVE = "Remove"
const TEXT_ADD_TO_CART = "Add to cart"
const BACKPACK_PRICE = "29.99"
const CHECKOUT_STEP_ONE_URL = Cypress.config('baseUrl') + "checkout-step-one.html"
const CHECKOUT_STEP_TWO_URL = Cypress.config('baseUrl') + "checkout-step-two.html"
const ORDER_COMPLETED = Cypress.config('baseUrl') + "checkout-complete.html"
const ORDER_COMPLETED_TEXT = "THANK YOU FOR YOUR ORDER"

var userCredentials = {
        username: 'standard_user',
        password: 'secret_sauce'
    }

var userData = {
        firstName: 'fist',
        lastName: 'last',
        zipCode: "000"
    }

var resolution = [
    {
        h: 576,
        w: 960
    },
    {
        h: 820,
        w: 1180
    },
    {
        h: 1080,
        w: 1920
    }
]
    

describe('test', function () { 
    resolution.forEach((resolutionData) => {   
        it(`Sign in by user: ${userCredentials.username} and make order on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
            cy.viewport(resolutionData['w'], resolutionData['h'])
            cy.visit('')
            cy.fillLoginFormAndLogIn(userCredentials)
            cy.checkCookie() 
            inventory.addBackpackToCartBtn().should("have.text", TEXT_ADD_TO_CART)  
            cy.addBackpackToCart()
            inventory.removeBackpackToCartBtn().should("have.text", TEXT_REMOVE) 
            cy.goToCartByBtn()
            cart.priceHolder().should('contain', BACKPACK_PRICE)
            cy.goToCheckoutByBtn()
            cy.url().should('eq', CHECKOUT_STEP_ONE_URL)
            cy.fillCheckoutStepOneForm(userData)
            cy.continueByBtn()
            cy.url().should('eq', CHECKOUT_STEP_TWO_URL)
            cy.finishByBtn()
            cy.url().should('eq', ORDER_COMPLETED)
            checkoutCompleted.completeTextHolder().should('have.text', ORDER_COMPLETED_TEXT)
        })
    })
})