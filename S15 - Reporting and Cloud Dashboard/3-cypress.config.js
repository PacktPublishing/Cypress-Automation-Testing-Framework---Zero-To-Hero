const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  // screenshotOnRunFailure: true,
  // video: true,
  retries: 1,
  // retries: {
  //   runMode: 2,
  //   openMode: 1,
  // },
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
