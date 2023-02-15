/// <reference types="cypress" />
/// <reference path="../../cypress.d.ts" />
import React from 'react'
import { Timer, formatTime } from './Timer'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'
import moment from 'moment'

describe('Timer', () => {
  it('counts seconds', () => {
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: moment() }}>
        <div className="innercontainer">
          <section className="status">
            <Timer />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    cy.contains('.status__time', '00:00')
    cy.contains('.status__time', '00:01')
    cy.contains('.status__time', '00:02')
    cy.contains('.status__time', '00:03')
  })

  it('freezes the clock', () => {
    cy.clock()
    cy.mount(
      <section className="status">
        <Timer />
      </section>,
    )

    cy.contains('.status__time', '00:00')
    cy.wait(3000)
    // the timer is still showing zeros
    cy.contains('.status__time', '00:00')
  })

  it('sets the clock to the given value', () => {
    const now = moment()
    cy.clock(now.clone().add(700, 'seconds').toDate())
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: now }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>,
    )
    // 700 seconds = 11 minutes and 40 seconds on the clock
    cy.contains('.status__time', '11:40')
  })

  // cannot advance the clock correctly
  it('advances the clock using cy.tick')

  it('takes a screenshot of the Timer component', () => {
    cy.mount(
      <section className="status">
        <Timer />
      </section>,
    )
    // because the status time class uses relative positioning
    // if we just take the .status element screenshot
    // it will NOT show the actual timer
    cy.get('.status .status__time').screenshot('Timer', { overwrite: true })
  })

  it('formats the time', () => {
    expect(formatTime({})).to.equal('00:00')
    expect(formatTime({ seconds: 3 })).to.equal('00:03')
    expect(formatTime({ seconds: 15, minutes: 3 })).to.equal('03:15')
    expect(formatTime({ seconds: 15, minutes: 13, hours: 4 })).to.equal(
      '4:13:15',
    )
    expect(formatTime({ seconds: 15, minutes: 13, hours: 54 })).to.equal(
      '54:13:15',
    )
    // show how to write text into the document
    cy.document().invoke('write', formatTime({ seconds: 3 }))
  })
})
