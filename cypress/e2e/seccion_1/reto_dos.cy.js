/// <reference types="Cypress" />

require('cypress-xpath')

describe("Segundo reto", () =>{

    it("Segundo reto", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title('eq', 'Computers database')
        cy.wait(1500)

        //buscando
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("ACE")
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").click()

        //agregando
        cy.get('#add').should("be.visible").click()
        cy.get('#name').should("be.visible").type("Personal Computer 1")
        cy.get('#introduced').should("be.visible").type("2001-07-07")
        cy.get('#discontinued').should("be.visible").type("2003-07-07")
        //botón que te da a elegir opciones
        cy.get('#company').should("be.visible").select("Apple Inc.").should("have.value", "1").wait(2000)
        cy.get('.primary').should("be.visible").click()

        //vamos a buscarlo a ver si se creó
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Personal Computer 1")
        cy.get('#searchsubmit').should("be.visible").click()
    })
})