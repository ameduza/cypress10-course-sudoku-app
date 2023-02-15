/// <reference types="cypress" />
import React from 'react'
import { Numbers } from './Numbers'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Numbers', () => {
  it('shows numbers', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>,
    )
    cy.get('.status__number').should('have.length', 9)
  })

  it('shows all numbers (one by one)', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>,
    )
    // trying to assert every number in the DOM
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((k) => {
      cy.contains('.status__number', k)
    })
  })

  it('reacts to a click', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers onClickNumber={cy.stub().as('click')} />
        </section>
      </div>,
    )
    cy.contains('.status__number', '9').click()
    cy.get('@click').should('have.been.calledOnceWith', '9')
  })

  it('shows selected number', () => {
    cy.mount(
      <SudokuContext.Provider value={{ numberSelected: '4' }}>
        <div className="innercontainer">
          <section className="status">
            <Numbers />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    cy.contains('.status__number', '4').should(
      'have.class',
      'status__number--selected',
    )
  })
})
