describe("Spash view", () => {
  before(() => {
    cy.visit("/inicio");
  });
  it("Should redirect to card", () => {
    cy.get(".home .card:nth-child(1) .btn").click();
    cy.url().should("include", "/mais-detalhes");
    cy.visit("/inicio");
  });

  it("Should contain the types", () => {
    cy.get(".home .card:nth-child(1) h5").should("contain", "Tipo(s)");
  });

  it("Should look for pokemons", () => {
    cy.get("#input-search").type("Venusaur");
    cy.get(".input-group > .btn").click();

    cy.url().should("contain", "busca=Venusaur");
    cy.get(".home .card:nth-child(1)").should("contain", "Venusaur");
    cy.visit("/inicio");
  });
});
