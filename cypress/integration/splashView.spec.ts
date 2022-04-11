describe("Spash view", () => {
  before(() => {
    cy.visit("/");
  });
  afterEach(() => {
    cy.visit("/");
  });
  it("Should contain the initial message", () => {
    cy.get(".text-white").should(
      "contain",
      "Olá, para interagir com os cards é necessário passar o cursor do mouse ou clicar"
    );
  });

  it("should redirect when clicking the button", () => {
    cy.get(".btn").click();
    cy.url().should("contain", "/inicio");
  });
});
