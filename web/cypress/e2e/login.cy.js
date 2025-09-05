describe('Login', () => {
  it('Log Sucess', () => {
    cy.openBrowser()

    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible'
      .padEnd('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
      )
  })
})