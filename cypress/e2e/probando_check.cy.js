/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

/*Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
*/
describe("Primer Reto", () =>{

    it("Opciones de click", () =>{
        cy.visit("https://prod.nucleocheck.com/#/login")
        cy.title().should('eq', 'NGCheck')
        cy.wait(1000)

        cy.xpath("//input[contains(@type,'text')]").type("ramiro@nucleoit.com.ar").tab().type("check2023")
        cy.get('.btn').click().should("be.visible")
    })
})