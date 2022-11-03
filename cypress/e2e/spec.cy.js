describe("main page", () => {
  it("loads", () => {
    cy.visit("localhost:3000");
  });

  it("shuffles a few episodes and can show/hide details", () => {
    cy.visit("localhost:3000");
    cy.contains("Shuffle").click();
    cy.contains("Shuffle").click();
    cy.contains("Shuffle").click();
    cy.contains("Details").click().document().get("h3").should("exist");
    cy.contains("Details").click().document().get("h3").should("not.exist");
  });
});
