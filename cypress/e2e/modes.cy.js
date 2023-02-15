/// <reference types="cypress" />

describe('Play mode - shows a different number of empty cells', () => {
  const preFilledCellsNumberEasy = 45;
  const preFilledCellsNumberMedium = 40;
  const preFilledCellsNumberHard = 30;

  beforeEach(() => {
    cy.visit('/');
  });

  it('shows Easy mode by default', () => {
    cy.get('.status__difficulty-select').should('have.value', 'Easy');
  });

  it('shows 45 empty cells for Easy mode', () => {
    cy.get('.game__cell--filled').should(
      'have.length',
      preFilledCellsNumberEasy
    );
  });

  it('shows 40 empty cells for Medium mode', () => {
    cy.get('.status__difficulty-select').select('Medium');
    cy.get('.game__cell--filled').should(
      'have.length',
      preFilledCellsNumberMedium
    );
  });

  it('shows 40 empty cells for Hard mode', () => {
    cy.get('.status__difficulty-select').select('Hard');
    cy.get('.game__cell--filled').should(
      'have.length',
      preFilledCellsNumberHard
    );
  });
});
