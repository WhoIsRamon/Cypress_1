/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Campos de tipo fecha", () =>{

    it("Fecha uno", () =>{
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("eq", "Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1500)

        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").click()
        cy.wait(1500)
        cy.get(".today").first().click({force:true})
    }) //no lo entendi mucho
    it.only("Fecha dos", () =>{
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("eq", "Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1500)

        cy.get('[placeholder="Start date"]').should("be.visible").type("09/19/2023 {esc}").tab().type("10/19/2023 {esc}")
    })//tampoco lo entendi
})