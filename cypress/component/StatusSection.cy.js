/// <reference types="cypress" />
import { StatusSection } from '../../src/components/layout/StatusSection';
import '../../src/App.css';

describe('Status Section', () => {
  it('looks fine on different viewport', () => {
    cy.mount(
      <div className="innercontainer" style={{ paddingTop: '30px' }}>
        <StatusSection />
      </div>
    );

    checkElementsVisibility();
    cy.viewport(290, 500);
    checkElementsVisibility();
  });

  it('changes modes', () => {
    cy.mount(
      <div className="innercontainer">
        <StatusSection />
      </div>
    );

    cy.get('.status__action-mistakes-mode input').should('not.be.checked');
    cy.get('.status__action-mistakes-mode').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.status__action-mistakes-mode input')
      .should('to.be.checked')
      .wait(500, { log: false });

    cy.get('.status__action-fast-mode input').should('not.be.checked');
    cy.get('.status__action-fast-mode').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.status__action-fast-mode input')
      .should('to.be.checked')
      .wait(500, { log: false });
  });
});

function checkElementsVisibility() {
  cy.get('.status__difficulty-select').should('be.visible');
  cy.get('.status__time').should('be.visible');
  cy.get('.status__numbers').should('be.visible');
  cy.get('.status__action-undo').should('be.visible');
  cy.get('.status__action-erase').should('be.visible');
  cy.get('.status__action-hint').should('be.visible');
  cy.get('.status__action-mistakes-mode').should('be.visible');
  cy.get('.status__action-fast-mode').should('be.visible');
}
