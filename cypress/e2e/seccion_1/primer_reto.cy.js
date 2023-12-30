/// <reference types="Cypress" />

require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Primer Reto", () =>{

    it("Opciones de click", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear() //para borrar lo que escribimos

        //agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("Juancito").tab().type("Perex").tab().type("juancitoperex@gmail.com").
        tab().type("35").tab().type("15000").tab().type("Development")
        cy.wait(1000)
        cy.get('#submit').should("be.visible").click()
        cy.get('#searchBox').should("be.visible").type("Juancito")
        cy.wait(3000)
        cy.get('#searchBox').should("be.visible").clear()
        cy.wait(1000)

        //Editar un campo
        cy.get("#edit-record-3").should("be.visible").click()
        cy.wait(1000)

        cy.get('#age').should("be.visible").clear().type("50") //borrar antes de escribir, sino se concatenar
        cy.wait(1750)
        cy.get('#salary').should("be.visible").clear().type("50000")
        cy.wait(4000)
        cy.get('#submit').should("be.visible").click()
        cy.wait(1000)

        //borrando el campo
        cy.wait(2000)
        cy.get("#delete-record-3").should("be.visible").click() //validar antes de hacer click.
    })
})