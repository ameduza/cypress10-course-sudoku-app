/// <reference types="cypress" />
import { Difficulty } from '../../src/components/Difficulty';
import '../../src/App.css';

describe('Difficulty', () => {
  it('changes difficulty level', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Difficulty onChange={cy.stub().as('change')} />
        </section>
      </div>
    );

    const selectedValue = 'Medium';
    cy.get('select').should('have.value', 'Easy').select(selectedValue);
    cy.get('select').should('have.value', selectedValue);

    cy.get('@change')
      .should('have.been.calledOnce')
      .its('firstCall.args.0.target.value')
      .should('equal', selectedValue);
  });
});
