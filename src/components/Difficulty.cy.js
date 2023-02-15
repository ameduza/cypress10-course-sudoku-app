/// <reference types="cypress" />
import React from 'react'
import { Difficulty } from './Difficulty'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Difficulty', () => {
  it('can be changed', () => {
    cy.mount(
      <SudokuContext.Provider value={{ difficulty: 'Hard' }}>
        <div className="innercontainer">
          <section className="status">
            <Difficulty onChange={cy.stub().as('change')} />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    cy.get('.status__difficulty-select')
      .should('have.value', 'Hard')
      .select('Medium')
    cy.get('@change')
      .should('have.been.calledOnce')
      .its('firstCall.args.0.target.value')
      .should('equal', 'Medium')
  })
})
