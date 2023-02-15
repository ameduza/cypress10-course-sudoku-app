/// <reference types="cypress" />

describe('Timer tests', () => {
  it('checks game time secs', () => {
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
    // make sure the game has fully loaded
    cy.get('.game__cell:contains(0)').should('have.length.greaterThan', 0);

    cy.contains('.status__time', '00:00');
    cy.tick(30_000);
    cy.contains('.status__time', '00:30');

    cy.tick(30_000);
    cy.contains('.status__time', '01:00');

    cy.tick(25_000);
    cy.contains('.status__time', '01:25');
  });
});
