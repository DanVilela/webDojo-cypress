describe('Consulting Form', () => {
  it('Must request individual consultancy', () => {
    cy.openBrowser()
    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.goToSteps('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]')
    .type('Teste Name')
    cy.get('input[placeholder="Digite seu email"]')
    .type('teste@email.com')
    cy.get('input[placeholder="(00) 00000-0000"]')
    .type('21 99999-9999')
    .should('have.value','(21) 99999-9999')

    cy.get('#consultancyType').select('Individual')

    cy.contains('label', 'Pessoa Física')
    .find('input')
    .check()
    .should('be.checked')

    cy.contains('label', 'Pessoa Jurídica')
    .find('input')
    .should('be.not.checked')
  })
})
