describe('Consulting Form', () => {
  it('Must request individual consultancy', () => {
    cy.openBrowser()
    cy.submitLogin('papito@webdojo.com', 'katana123')
    
    cy.goToSteps('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]')
    .type('Teste Name')
    cy.get('input[placeholder="Digite seu email"]')
    .type('teste@email.com')
  })
})
