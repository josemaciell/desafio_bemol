/// <reference types="Cypress" />

before(() => {
  cy.viewport(1920, 1080)
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  cy.clearAllLocalStorage()
  cy.clearAllCookies()
})

describe('Aplicação alvo: trivago.com.br', function() {
  beforeEach(() => {
    cy.visit('https://www.trivago.com.br/') //Acessar o site;
  })
  
  it('preenche os campos obrigatórios e envia o formulário', function() {
       cy.contains('Ponto de referência') //Pesquise por Manaus;
      .click()
      .type('Manaus')
    cy.get(':nth-child(1) > [data-testid="ssg-element"] > .h-14').click()
    cy.get('[data-testid="search-form-destination"]')
      .should('have.value', 'Manaus')

    cy.contains('button','Pesquisar')
      .should('be.visible')
      .click()    
    
    cy.get(':nth-child(1) > [data-testid="ssg-element"] > .h-14').click()
    cy.contains('button','Pesquisar')
     .should('be.visible')
     .click()
    cy.wait(15000).contains('Ordenar por').should('be.visible')

    cy.get('[data-testid="sorting-selector-select"]')
      .select(1)
      .should('have.value', '6')

    cy.get('[data-testid="item"]:first')
      .find('[itemprop="name"]')
      .should('have.text', 'ibis budget Manaus')
    cy.get('[data-testid="expected-price"]:first')
      // .find('[itemprop="name"]')
      .should('have.text', 'A partir de R$167')
    cy.get('[data-testid="rating-section"]:first')
      .find('[itemprop="ratingValue"]')
      .should('have.text', '8.4')
//     cy.contains('ibis budget Manaus').should('be.visible');
//     cy.contains('8.4 - Muito bom').should('be.visible');
//     cy.contains('R$164').should('be.visible');
// // ou
//     cy.contains('Comfort Hotel Manaus').should('be.visible');
//     cy.contains('8.6 - Excelente').should('be.visible');
//     cy.contains('R$188').should('be.visible');
// // em alguns momentos o 1o da lista estava alternando entre esses dois Hoteis a cima.   
    
    
  })
})

