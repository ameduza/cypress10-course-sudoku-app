const { defineConfig } = require('cypress');

const cypressJsonConfig = {
  baseUrl: 'http://localhost:3000',
  watchForFileChanges: false,
  viewportHeight: 800,
};

module.exports = defineConfig({
  e2e: {
    ...cypressJsonConfig,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    viewportHeight: 800,
    viewportWidth: 800,
  },
});
