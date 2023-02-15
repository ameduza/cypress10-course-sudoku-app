/// <reference types="cypress" />
import React from 'react'
import './App.css'
import { App } from './App'
import * as UniqueSudoku from './solver/UniqueSudoku'
import { init, solved } from '../cypress/fixtures/sudoku.json'

describe('App', () => {
  it('shows the board', () => {
    cy.clock()
    cy.mount(<App initial={init} solved />)
  })
})
