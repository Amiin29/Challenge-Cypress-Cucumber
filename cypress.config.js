const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "zrifeb",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "D:/Coin/Challenge-Cypress-Cucumber/cypress/integration/feature-files/*.feature",
  },
});
