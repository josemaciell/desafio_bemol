/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('www.buscacep.correios.com.br/')
  });
describe('Acessar Buscar CEP nos Correios', () => {
  it('Realizar a busca com o valor “69005-040”', () => {
    cy.get('#endereco')
      .type('69005-040')
    cy.get('#btn_pesquisar')
      .click()
    cy.get('.msg').should('be.visible')
    cy.get('#alerta').should('have.value', '')
  })

  it('Realizar a busca com o valor “Lojas Bemol”', () => {
    cy.get('#endereco')
      .type('Lojas Bemol')
    cy.get('#btn_pesquisar')
      .click()
    cy.get('.msg').should('be.visible')
    cy.get('#alerta').should('have.value', '')
  })
})

