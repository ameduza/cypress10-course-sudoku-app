import { defineConfig } from 'cypress';

const cypressJsonConfig = {
  baseUrl: 'http://localhost:3000',
  watchForFileChanges: false,
};

export default defineConfig({
  e2e: {
    ...cypressJsonConfig,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
