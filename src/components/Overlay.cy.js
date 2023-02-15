/// <reference types="cypress" />
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'

describe('Overlay', () => {
  it('is invisible', () => {
    cy.mount(<Overlay />)
    cy.get('.overlay').should('not.be.visible')
  })

  it('is visible and clickable', () => {
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
    cy.get('.overlay').should('be.visible').click()
    cy.get('@click').should('have.been.called')
  })

  it('shows the list of top times', () => {
    cy.intercept('GET', '/times/90', {
      delay: 1000,
      fixture: 'times.json',
    })
    // we solved Sudoku in 90 seconds
    cy.mount(<Overlay overlay={true} time={90} />)
    cy.get('.overlay__loading').should('be.visible')
    cy.get('.overlay__loading').should('not.exist')
    cy.get('.overlay__times li').should('have.length', 3)
    cy.contains('.overlay__times li', '01:30').should(
      'have.class',
      'overlay__current',
    )
  })

  it('shows nothing if errors', () => {
    cy.intercept('GET', '/times/90', {
      status: 404,
    })
    // we solved Sudoku in 90 seconds
    cy.mount(<Overlay overlay={true} time={90} />)
    cy.get('.overlay__loading').should('not.exist')
    cy.get('.overlay__times').should('not.exist')
  })
})
