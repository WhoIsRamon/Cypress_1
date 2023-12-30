/// <reference types="Cypress" />

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Comandos personalizados", () =>{

    beforeEach(() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1500)
    })

    it("Demo 1", () =>{
        cy.log("Probandoooo")
        cy.Texto_Visible("#userName", "Ramiro", 1500)
        cy.Texto_Visible("#userEmail", "Ramiro@nucleoit.com.ar", 1500)
        cy.Texto_Visible_xpath("//textarea[contains(@id,'currentAddress')]", "Juncal 879", 1500)
        cy.Texto_Visible_xpath("//textarea[contains(@id,'permanentAddress')]", "BOOOOCAAAA", 1500)
        cy.Click('#submit', 1500)
    })
    it("Demo 2 por bloque", () =>{
        cy.Bloque_demoqa("Ramiro", "rama@nucleoit.coma.r", "juncal46", "bocaaaaaaaaa",1500)
    })
})