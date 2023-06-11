/// <reference types="cypress" />

describe('Tarefa', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('preencho meu nome', () => {
        cy.get('input[name="name"]').type("meu nome");
    })

    it('preencho minha altura', () => {
        cy.get('input[name="height"]').type("1,80");
    })

    it('preencho minha altura', () => {
        cy.get('input[name="weight"]').type("80");
    })

    it('Clico no botão Calcular Validando calculo do imc', () => {
        cy.get('button').click().wait(5000);
        cy.get('div[class="user-info"]').should('contain.text','Este valor de IMC corresponde')
    })
})