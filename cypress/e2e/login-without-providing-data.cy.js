import cypressConfig from '../../cypress.config'
import login from '../pageObjects/loginPage'
const ERROR_MESSAGE = "Epic sadface: Username is required"

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

describe('Login without providing data', function () {
    resolution.forEach((resolutionData) => {
        it(`Try to sign in without providing data on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
            cy.viewport(resolutionData['w'], resolutionData['h'])
            cy.visit('')
            cy.url().should('eq', Cypress.config('baseUrl'))
            cy.logInWithoutData()
            login.messageContainer().should('have.text', ERROR_MESSAGE)
            cy.url().should('eq', Cypress.config('baseUrl'))
        })
    })
})
