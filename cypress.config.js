const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i5q2n5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
