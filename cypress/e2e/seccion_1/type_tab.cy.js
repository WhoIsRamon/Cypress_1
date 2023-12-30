/// <reference types="Cypress" />

require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Ejemplo funcion tab", () =>{

    it("Type con tab", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get('#firstName').type("Ramon").tab().
        type("Souto").tab().
        type("ramoncito32@gmail.com")
    })
})