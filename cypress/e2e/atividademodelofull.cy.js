/// <reference types="cypress" />

describe('Tarefa', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('preencho meu nome', () => {
         cy.get('input[name="name"]').type("NOME");
        cy.get('input[name="height"]').type("1,80");
        cy.get('input[name="weight"]').type("80");
        cy.get('button').click();
        //cy.get('pre[class="user-name"]').contains("NOME");
        cy.get('div[class="user-info"]').should('be.visible').contains("NOME"); // Valida se contem o NOME no retorno do calculo do IMC
        //cy.get('span[class="user-result"]').should('be.visible').contains("Acima do peso");
        //cy.get('span[class="user-result"]').contains("Acima do peso");
    })
})
