/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Intro asserts", () =>{

    it("Demo de los asserts", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Juan")
        cy.get("#lastName").should("be.visible").type("Perez")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("ramisouto@gmail.com")
        cy.wait(3000)
    })
})