/// <reference types="Cypress" />

before(() => {
  cy.viewport(1920, 1080)
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  cy.clearAllLocalStorage()
  cy.clearAllCookies()
})

// describe('Aplicação alvo: trivago.com.br', function() {
//   beforeEach(() => {
//     cy.visit('https://www.trivago.com.br/')
//   })
  
  it('preenche os campos obrigatórios e envia o formulário', function() {
    cy.visit('https://www.trivago.com.br/') //Acessar o site;
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

    cy.contains('ibis budget Manaus').should('be.visible');
    cy.contains('8.4 - Muito bom').should('be.visible');
    cy.contains('R$164').should('be.visible');

    cy.contains('Comfort Hotel Manaus').should('be.visible');
    cy.contains('8.6 - Excelente').should('be.visible');
    cy.contains('R$188').should('be.visible');
        
    //     // Validar a avaliação
    // cy.get('[data-accommodation="554546"] > .slideout-container_wrapper__cVquW > [data-testid="item"] > .item_subGrid__vJXlf > [data-testid="details-section"] > [data-testid="rating-section"] > [data-testid="aggregate-rating"] > .rating-section_ratingDetails__YAjnN > .rating-section_truncate__7Sl45 > strong > span').should('have.value', '8.6');
      
    //     // Validar o valor
    // cy.get('[data-accommodation="554546"] > .slideout-container_wrapper__cVquW > [data-testid="item"] > .item_subGrid__vJXlf > .item_dealsContainer__RuvUy > [data-testid="standard-dates-area"] > [data-testid="expected-price"] > .StandardDatesArea_fromLabel__YE_Kn > b').should('have.value', 'R$188');
       
    
  })

  // 1 - Acessar o site;
  // 2 - Pesquise por Manaus;
  // 3 - Ordene as opções listadas por “Avaliações e Sugestões”;
  // 4 - Verifique o primeiro nome da lista;
  // 5 - Verifique a avaliação;
  // 6 - Verifique o valor;