describe('Timer tests', () => {
  it.only('checks game time secs', () => {
    cy.visit('/');
    for (let index = 0; index < 5; index++) {
      cy.contains('.status__time', `00:0${index}`);
    }
  });

  // confirm the timer shows '00:30' after 30 secs
  // confirm the timer shows '11:40' after 700 secs
  it('shows correct time in certain time frames', () => {
    cy.clock();
    cy.visit('/');
    cy.contains('.status__time', '00:00');
    // cy.tick() doesn't work as expected below
    cy.tick(30_000);
    cy.contains('.status__time', '00:30');
  });
});
