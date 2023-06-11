
## Teste de Cálculo de IMC com Cypress

Este é um README explicativo para o código de teste automatizado usando o framework Cypress. O teste tem como objetivo preencher informações pessoais (nome, altura e peso) em um formulário e validar o cálculo do Índice de Massa Corporal (IMC).

### Pré-requisitos
Certifique-se de ter os seguintes pré-requisitos instalados em seu ambiente de desenvolvimento:

- Node.js 
- Cypress

### Configuração do Ambiente
1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências necessárias.

### Executando os Testes
1. Após concluir a configuração do ambiente, execute o comando `npx cypress open` no terminal.
2. O Cypress Test Runner será aberto.
3. Clique no arquivo de teste chamado `atividademodelo.cy.js` para executar os testes.
4. Os testes serão executados automaticamente em uma janela de navegador.

### Estrutura do Código
O código de teste está organizado da seguinte maneira:

- O arquivo de teste principal está localizado dentro da pasta e2e.
- O arquivo de teste principal é denominado por `atividademodelo.cy.js` e `atividademodelofull.cy.js`.

o cypress entende que cada it é um teste isolado, então ele sempre volta ao estado original da página para então realizar o teste seguinte e assim por diante, essa execução pode ser vista no teste `atividademodelo.cy.js`, para testar o preenchimento de todo o formulário e sua execução, bastaria colocar todos os comandos juntos dentro de um it. ssa execução pode ser vista no teste `atividademodelofull.cy.js`.

Ambos os códigos de teste apresentam funcionalidades semelhantes, mas o segundo código (`atividademodelofull.cy.js`) é mais eficiente em termos de legibilidade e manutenção, pois agrupa todas as ações em um único teste. Além disso, utiliza uma constante para armazenar o nome

## Segue a Explicação para o codigo `atividademodelo.cy.js`
#### Teste: preencho meu nome
Este teste tem como objetivo preencher o campo "Nome" com o valor "meu nome" e verificar se o preenchimento foi feito corretamente.

```bash
it('preencho meu nome', () => {
    cy.get('input[name="name"]').type("meu nome");
})
```


Explicação:
- O comando `cy.get('input[name="name"]')` encontra o campo de entrada com o atributo `name` igual a "name".
- O comando `.type("meu nome")` insere o valor "meu nome" no campo encontrado.

#### Teste: preencho minha altura
Este teste tem como objetivo preencher o campo "Altura" com o valor "1,80" e verificar se o preenchimento foi feito corretamente.

```bash
it('preencho minha altura', () => {
    cy.get('input[name="height"]').type("1,80");
})
```

Explicação:
- O comando `cy.get('input[name="height"]')` encontra o campo de entrada com o atributo `name` igual a "height".
- O comando `.type("1,80")` insere o valor "1,80" no campo encontrado.

#### Teste: preencho meu peso
Este teste tem como objetivo preencher o campo "Peso" com o valor "80" e verificar se o preenchimento foi feito corretamente.


it('preencho meu peso', () => {
    cy.get('input[name="weight"]').type("80");
})


Explicação:
- O comando `cy.get('input[name="weight"]')` encontra o campo de entrada com o atributo `name` igual a "weight".
- O comando `.type("80")` insere o valor "80" no campo encontrado.

#### Teste: Clico no botão Calcular Validando o cálculo do IMC
Este teste tem como objetivo clicar no botão "Calcular", aguardar o resultado do cálculo do IMC e verificar se a div com a classe "user-info" contém o texto esperado



