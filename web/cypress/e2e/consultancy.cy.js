describe("Consulting Form", () => {
  it("Must request individual consultancy", () => {
    cy.openBrowser();
    cy.submitLogin("papito@webdojo.com", "katana123");

    cy.contains("button", "Formulários").should("be.visible").click();

    cy.contains("h1", "onsultoria").should("be.visible");
  });
});
