/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, Runnable) =>{
    return false
})

describe("Carga por fixture", () =>{
    /*
    before(function(){
        cy.fixture('datos').then(function(data){
            globalThis.data=data
        })
    })
    */
   before(function(){
    cy.fixture("datos").as("datos_json") //por alias
   })

    it("test uno cargando desde json", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
        cy.wait(1000)

        cy.get("@datos_json").then((data) =>{
            cy.get('#userName').should("be.visible").type(data.nombre)
            cy.wait(1000)
            cy.get('#userEmail').should("be.visible").type(data.email)
            cy.wait(1000)
            cy.get('#currentAddress').should("be.visible").type(data.dir1)
            cy.wait(1000)
            cy.get('#permanentAddress').should("be.visible").type(data.dir2)
            cy.wait(1000)
            cy.get('#submit').should("be.visible").click()
        })
    })
})