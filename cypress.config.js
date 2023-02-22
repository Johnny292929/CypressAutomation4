
const { defineConfig } = require("cypress")
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")

module.exports = defineConfig({
  retries:{
    runMode: 1
  },
  pageLoadTimeout: 200000,
  defaultCommandTimeout: 20000,
  projectId: '1huejn',

  e2e: {setupNodeEvents(on, config) {
    on("before:browser:launch", (browser = {}, launchOptions) => {
      prepareAudit(launchOptions);
    });
  
    on("task", {
      lighthouse: lighthouse(), // calling the function is important
      //pa11y: pa11y(), // calling the function is important
    });
    
    }, 
    baseUrl:'https://tsharpslot1qa.devsd.innovasi.com/',
    //baseUrl:'https://sharpproductionmirror.devsd.innovasi.com/',
     //baseUrl:'https://www.google.com',
   //specPattern:'cypress/integration/Testcases/*.js',
   specPattern:'cypress/e2e/1-getting-started/*.js'
 
  },

  
  watchForFileChanges:true,
  reporter: "junit",
  reporterOptions:{
   "mochaFile":"results/my-test-output-[hash].xml"
  }
 
})

