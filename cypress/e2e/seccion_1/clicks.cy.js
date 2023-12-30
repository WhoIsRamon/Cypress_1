/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Clicks", () =>{

    it("Opciones de click", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.get("#lastName").should("be.visible").click()
        cy.get("#userEmail").should("be.visible").should("be.enabled").click()
        cy.wait(3000)
    })
    it("Click force true", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.get("#lastName").should("be.visible").click()
        cy.get("#userEmail").should("be.visible").should("be.enabled").click({force: true})
        cy.wait(3000)
    })
    it("Click por coordenadas", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)

        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(3000)
        cy.get(".page-title").should("be.visible").click(50,5)
    })
})
//todas las lineas de codigo son de prueba porque no pude ingresar a la pagina