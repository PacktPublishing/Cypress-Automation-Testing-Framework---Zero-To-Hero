const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "aixo8e",
  defaultCommandTimeout: 6000,
  experimentalWebKitSupport: true,
  
  e2e: {
    // baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
