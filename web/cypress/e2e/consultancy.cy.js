describe('Consulting Form', () => {
  it('Must request individual consultancy', () => {
    cy.openBrowser()
    cy.submitLogin('papito@webdojo.com', 'katana123')
    cy.goToSteps('Formulários', 'Consultoria')
  })
})
