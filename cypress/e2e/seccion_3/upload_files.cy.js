/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import 'cypress-file-upload'
require('cypress-xpath')

describe("Upload files", () =>{

    it("Cargando imagenes", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(2000)

        const ruta= 'fondocancha.jpg'
        cy.get("[type='file']").attachFile(ruta)
        cy.wait(2000)
    })
})