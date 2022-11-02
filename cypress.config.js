const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xa3jga',  
  e2e: {
    setupNodeEvents(on, config) {         
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    specPattern: "**/*.spec.js",
  
  },
});
