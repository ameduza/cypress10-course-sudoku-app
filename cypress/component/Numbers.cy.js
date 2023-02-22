/// <reference types="cypress" />
//import { React } from 'react';
import { Numbers } from '../../src/components/Numbers';
import '../../src/App.css';
import { SudokuContext } from '../../src/context/SudokuContext';

describe('Numbers', () => {
  it('shows numbers', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>
    );

    cy.get('.status__number').should('have.length', 9);
  });

  it('calls on click number', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers onClickNumber={cy.stub().as('click')} />
        </section>
      </div>
    );

    for (let index = 1; index < 10; index++) {
      cy.contains('.status__number', index.toString()).click();
      cy.get('@click').should('have.been.calledWith', index.toString());
    }
  });

  it('shows the selected number', () => {
    cy.mount(
      <SudokuContext.Provider value={{ numberSelected: '8' }}>
        <div className="innercontainer">
          <section className="status">
            <Numbers onClickNumber={cy.stub().as('click')} />
          </section>
        </div>
      </SudokuContext.Provider>
    );

    cy.contains('.status__number', '8').should(
      'have.class',
      'status__number--selected'
    );
  });
});
