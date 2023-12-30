/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Seccion 1 Validando el Titulo ", () =>{

    it("Test validar el titulo de la pagina ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')

        cy.log("La funcion esta ok")
    })
})