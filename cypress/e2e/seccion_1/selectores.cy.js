/// <reference types="Cypress" />

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Selectores", () =>{

    it("Selector por id", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Candela")
        cy.get("#userEmail").should("be.visible").type("Candelagrasso@gmail.com")
    })
    it("Selector por atributo", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Candela Grasso")
    })
    it("Selector por xpath", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Gabriel Andres Souto") //primera manera es parandote arriba del selector del codigo -> copy xpath
        //faltan 2 maneras mas de seleccionas xpath pero creo que no esta actualizado
    })
    it("Selector por Contains", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
    })
    it.only("Selector por copySelector", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("2985129129") //este se hace seleccionando el pedacito de codigo -> copy como selector
    })
})