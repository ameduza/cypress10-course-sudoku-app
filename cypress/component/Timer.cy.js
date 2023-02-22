/// <reference types="cypress" />
import { Timer } from '../../src/components/Timer';
import '../../src/App.css';
import { SudokuContext, SudokuProvider } from '../../src/context/SudokuContext';
import moment from 'moment';

describe('Timer', () => {
  it('process time correctly', () => {
    cy.mount(
      <SudokuProvider>
        <section className="status">
          <Timer />
        </section>
      </SudokuProvider>
    );

    cy.contains('00:00').should('be.visible');
    cy.contains('00:01').should('be.visible');
    cy.contains('00:02').should('be.visible');
    cy.contains('00:03').should('be.visible');
  });

  it('display different time correctly', () => {
    const now = moment();
    let future = now.clone().add(850, 'seconds');
    cy.clock(future.toDate());

    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: now, won: false }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>
    );

    cy.contains('14:10').should('be.visible');
  });
});
