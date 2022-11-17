describe("filter customers", () => {
    it("filter gellers", () => {
        cy.visit("http://localhost:4200");
        cy.get('input[name="searchText"]')
            .type("Geller")
            .get(".card")
            .then(rows => {
                expect(rows.length).to.eq(2);
            })
    });
})