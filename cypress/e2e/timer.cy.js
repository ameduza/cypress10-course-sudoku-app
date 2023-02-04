describe('empty spec', () => {
  it('checks game time secs', () => {
    cy.visit('/');
    for (let index = 0; index < 10; index++) {
      cy.contains('.status__time', `00:0${index}`);
    }
  });
});
