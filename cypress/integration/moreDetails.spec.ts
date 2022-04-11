describe("More detail view", () => {
  before(() => {
    cy.visit("/inicio");
  });
  it("Should contain additional information", () => {
    cy.get(".home .card:nth-child(1) .btn").click();
    cy.get(".back > :nth-child(2)").should("contain", "Tipo(s)");
    cy.get(".back > :nth-child(4)").should("contain", "Resistencia(s)");
    cy.get(".back > :nth-child(6)").should("contain", "Fraqueza(s)");
    cy.get(".back > :nth-child(8)").should("contain", "Ataque(s)");
  });

  it("should list attack data in modal", () => {
    cy.get(":nth-child(9) > .mb-2 a").click();
    cy.get(":nth-child(9) > .mb-2 a")
      .invoke("text")
      .then((text) => {
        cy.get(".header > .mb-0").should("contain", text);
      });
    cy.get(".body > :nth-child(1)").should("contain", "Custo de mana");
    cy.get(".body > :nth-child(2)").should("contain", "Dano");
    cy.get(".body > :nth-child(3)").should("contain", "Descrição");
    cy.get(".btn").click();
  });

  it("Should return to the previous screen", () => {
    cy.get(".ms-2").click();
    cy.url().should("contain", "/inicio");
    cy.go(-1);
  });
});
