/// <reference types="Cypress" />

describe("Referencia de windows", () =>{

    it("Propiedad charset", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        cy.wait(1500)

        cy.document().should("have.a.property", "charset").and('eq', 'UTF-8') //estamos validando que acepte ñ, acentos, etc.
    })
    it("Validando url", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        cy.wait(1500)

        cy.url().should("include", "/random-number.html")
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")
    })
})