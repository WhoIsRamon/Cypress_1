/// <reference types="Cypress" />

require('cypress-xpath')

describe("Alias", () =>{

    it("Alias 1", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1500)

        cy.get('#firstname').should("be.visible").as("nomb")
        cy.get("@nomb").type("Candela")
        cy.wait(1500)
        cy.get('#surname').should("be.visible").as("ape")
        cy.get("@ape").type("Grasso De Souto")
        cy.wait(1500)
        cy.get('#age').should("be.visible").as("num")
        cy.get("@num").type("23")
        cy.wait(1500)
        cy.get('#country').should("be.visible").as("ispa")
        cy.get("@ispa").select("Argentina").should("have.value", "Argentina")
        cy.wait(1500)
        cy.get('#notes').should("be.visible").as("not")
        cy.get("@not").type("La mujer de mi vida")
        cy.wait(1500)
        cy.get('[type="submit"]').should("be.visible").click()
    })
})