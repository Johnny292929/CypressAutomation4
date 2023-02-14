
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries:{
    runMode: 1
  },
  pageLoadTimeout: 200000,
  defaultCommandTimeout: 20000,
  projectId: '1huejn',

  e2e: {setupNodeEvents(on, config) {
    baseUrl:'https://tsharpslot1qa.devsd.innovasi.com/'
    }, 
    
    specPattern:'cypress/integration/Testcases/*.js'
 
  },
  watchForFileChanges:true,
  reporter: "mochawesome",
  reporterOptions:{
    charts:true,
    overwrite:false,
    html:false,
    json:true,
    reportDir:"cypress/reports"

  }
 


})

