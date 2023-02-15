/// <reference types="cypress" />

import { init, solved } from '../fixtures/sudoku.json';

describe('Game', () => {
  it('fills each empty cell', () => {
    cy.visit('/', {
      onBeforeLoad(window) {
        window.starting = init;
        window.solved = solved;
      },
    });
    cy.get('.game__cell:contains(0)').should('have.length.greaterThan', 1);

    init.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click();
        cy.contains('.status__number', solved[index]).click();
      }
    });
    cy.contains('.overlay__text', 'You solved it').should('be.visible');
  });
});
