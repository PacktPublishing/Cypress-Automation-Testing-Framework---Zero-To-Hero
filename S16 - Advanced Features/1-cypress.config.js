const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    username: 'test@email.com',
    password: 'abcabc',
    url: 'https://www.letskodeit.com'
  },
  
  e2e: {
    // baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      const username = process.env.APP_USERNAME
      const password = process.env.PASSWORD

      config.env = {username, password}
      return config
    },
  },
})
