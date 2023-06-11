/// <reference types="cypress" />

describe('Tarefa', () => {
    beforeEach(() => {
        cy.visit('')
    })

    const nome = "meu nome"

    it('preencho meu nome', () => {
        cy.get('input[name="name"]').type(nome);
        cy.get('input[name="height"]').type("1,80");
        cy.get('input[name="weight"]').type("80");
        cy.get('button').click();
        cy.get('div[class="user-info"]').should('be.visible',`Olá, ${nome}!`)
    })
})
