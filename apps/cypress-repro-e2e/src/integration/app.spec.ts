import { getGreeting } from '../support/app.po';

describe('cypress-repro', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome cypress-repro');

    /**
     * Currently set to localhost:8080 in cypress.env.json
     * Should be overriden by running with env.NX_API_URL
     */
    console.log(Cypress.env('NX_API_URL'))
  });
});
