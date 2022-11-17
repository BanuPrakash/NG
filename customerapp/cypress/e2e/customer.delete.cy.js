describe("delete customers", () => {
    it("delete customer by click", () => {
        cy.visit("http://localhost:4200");
        cy.get('.fa-trash')
             .eq(3)
            .click()
            .get(".card")
            .then(rows => {
                expect(rows.length).to.eq(5);
            })
    });
})