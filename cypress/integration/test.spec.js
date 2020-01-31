import { api } from '../../schemas';

describe('our fixture response', () => {
  it('returns a fixture that is validated by our JSON schema', () => {
    cy.server();
    cy.fixture('queryResponse').then(api.assertSchema('QueryResponse', '1.0.0'));
  });
});