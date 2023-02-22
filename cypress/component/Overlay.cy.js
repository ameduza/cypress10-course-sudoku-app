/// <reference types="cypress" />
import { Overlay } from '../../src/components/Overlay';
import '../../src/App.css';

describe('Overlay', () => {
  it('is visible and clickable', () => {
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />);
    cy.get('.overlay--visible').should('be.visible').click();

    cy.get('@click').should('have.been.calledOnce');
  });

  it('is invisible ', () => {
    cy.mount(<Overlay />);
    cy.get('.overlay').should('not.be.visible');
  });
});
