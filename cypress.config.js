const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tsharpslot1qa.devsd.innovasi.com/',
  },
  projectId: '1huejn',
  specPattern:'cypress/integration/Testcases/*.js'
})
