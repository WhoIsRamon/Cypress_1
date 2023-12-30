/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Snippets", () =>{

    it("Snippet uno", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)

        cy.get('#userName').should("be.visible").click()
    }) //todavia no los repase mucho
})