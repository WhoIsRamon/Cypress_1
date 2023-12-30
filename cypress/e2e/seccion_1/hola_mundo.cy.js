/// <reference types="cypress" />

describe('Primer test con cypress', ()=>{
    it("Esto es un hola mundo desde cypress", () =>{
        cy.log("Bienvenido a Cypress")
        cy.visit('https://testingqarvn.com.es/datos-personales/') //visitar la pagina que queremos testear

        cy.get("#wsf-1-field-21").type("Ramiro") //accedemos al campo y lo completamos
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Villamil")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("ramiroAngel@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("115464686")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("juncal 468")
        cy.get("#wsf-1-field-27").click()

        cy.wait(3000)
    })
})