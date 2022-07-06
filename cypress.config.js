module.exports = {
  e2e: {
    setupNodeEvents(on, config) {    
    },
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/'
  },
  integration:{
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://catfact.ninja'
  }
};
