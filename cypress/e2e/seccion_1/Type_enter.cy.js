/// <reference types="Cypress" />

describe("Funciones para Type", () =>{

    it("Type ENTER", () =>{
        cy.visit("https://www.google.com.ar/?hl=es")

        cy.title().should('eq', "Google")
        cy.wait(1500)

        cy.get("[name='q']").type("Facebook {enter}") //funcion type center
        cy.wait(1000)
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
    })
})