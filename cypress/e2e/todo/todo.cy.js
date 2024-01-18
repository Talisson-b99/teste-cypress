/// <reference types="cypress" />


describe('Teste todo', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })
  it('Garantir que todos os inputs para inclusão de tarefa esteja na tela', () => {
    cy.get('.ckeKmo input').should('have.length', 3)
  })
  it("Garantir o preenchimento de dados no input", () => {
    cy.get('[type="text"]').type('Talisson barbosa')
    cy.get('[type="email"]').type('talissobarbosa@gmail.com')
    cy.get('[type="tel"]').type('11 9999-9999')
  })

  it("Garantir a inclusão de dados na lista de tarefas", () => {
    cy.get('[type="text"]').type('Talisson barbosa')
    cy.get('[type="email"]').type('talissobarbosa@gmail.com')
    cy.get('[type="tel"]').type('11 9999-9999')
  
  })

  it("Garantir que o numero de contatos, foi alterado", () => {
    cy.get('[type="text"]').type('Talisson barbosa')
    cy.get('[type="email"]').type('talissobarbosa@gmail.com')
    cy.get('[type="tel"]').type('11 9999-9999')
    cy.get('.adicionar').click()
    cy.wait(2000)
    cy.get('h2').should('contain', '4 contatos na agenda')
  })

  it("Garantir que um contato possa ser excluido", () => {
    cy.get(':last-child() > .sc-gueYoa > .delete').click()
    cy.get('h2').should('contain', '3 contatos na agenda') 
  })

  it("Garantir que os dados possam ser atualizados", () => {
    cy.get('[type="text"]').type('Talisson barbosa')
    cy.get('[type="email"]').type('talissobarbosa@gmail.com')
    cy.get('[type="tel"]').type('11 9999-9999')
    cy.get('.adicionar').click()
    cy.wait(2000)
    cy.get('h2').should('contain', '4 contatos na agenda')
    cy.get(':last-child() > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').should('have.value', 'Talisson barbosa')
    cy.get('[type="email"]').should('have.value', 'talissobarbosa@gmail.com')
    cy.get('[type="tel"]').should('have.value', '11 9999-9999')
    cy.get('[type="text"]').clear().type('Talisson')
    cy.get('.alterar').click()
  })
  
})