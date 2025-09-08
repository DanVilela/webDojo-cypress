describe('Consulting Form', () => {
  it('Must request individual consultancy', () => {
    cy.openBrowser()
    cy.submitLogin('papito@webdojo.com', 'katana123')

    cy.goToSteps('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]').type('Teste Name')
    cy.get('input[placeholder="Digite seu email"]').type('teste@email.com')
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type('21 99999-9999')
      .should('have.value', '(21) 99999-9999')

    cy.get('#consultancyType').select('Individual')

    cy.contains('label', 'Pessoa Física')
      .find('input')
      .click()
      .should('be.checked')

    cy.contains('label', 'Pessoa Jurídica')
      .find('input')
      .should('be.not.checked')

    cy.contains('label', 'CPF')
      .parent()
      .find('input')
      .type('16184318039')
      .should('have.value', '161.843.180-39')

    const discoveryChannels = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo',
    ]

    discoveryChannels.forEach((channel) => {
      cy.contains('label', channel)
      .find('input')
      .check()
      .should('be.checked')
    })

    cy.get('input[type="file"]')
    .selectFile('./cypress/fixtures/example_img_upload_cypress.pdf', { force: true})

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
    .type('Exemple text to writing in field textarea and lorem ipsum dolor sit amet')

    const frameworksAutomation = [
      'Cypress',
      'Robot',
      'Selenium',
      'Playwright'
    ]

    frameworksAutomation.forEach ((frame) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
      .type(frame)
      .type('{enter}')

      cy.contains('label', 'Tecnologias')
      .parent()
      .contains('span', frame)
      .should('be.visible')
    })

    cy.contains('label', 'termos de uso')
    .find('input')
    .check()

    cy.contains('button', 'Enviar formulário')
    .click()

    cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    .should('be.visible')
  })
})
