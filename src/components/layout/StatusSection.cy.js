/// <reference types="cypress" />
import React from 'react'
import { StatusSection } from './StatusSection'
import '../../App.css'

describe('StatusSection', () => {
  it('renders status', () => {
    cy.mount(
      <div className="innercontainer" style={{ paddingTop: '30px' }}>
        <StatusSection />
      </div>,
    )
    cy.get('.status__action-mistakes-mode')
      .find('input[type=checkbox]')
      .should('not.be.checked')

    // cy.get('.status').screenshot('1 - modes off', {
    //   overwrite: true,
    //   padding: 100,
    // })

    cy.log('**turn both modes on**')
    cy.get('.status__action-mistakes-mode')
      .click()
      .find('input[type=checkbox]')
      .should('be.checked')
    cy.get('.status__action-fast-mode')
      .find('input[type=checkbox]')
      .should('not.be.checked')
    cy.get('.status__action-fast-mode')
      .click()
      .find('input[type=checkbox]')
      .should('be.checked')
      .wait(1000, { log: false })

    // cy.get('.status').screenshot('2 - both modes', {
    //   overwrite: true,
    //   padding: 100,
    // })

    cy.viewport(290, 500)
  })
})
