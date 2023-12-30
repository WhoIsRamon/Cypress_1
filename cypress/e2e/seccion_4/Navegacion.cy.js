/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Navegacion", () =>{

    it("navegacion back forward", () =>{
        cy.visit("https://demoqa.com/")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)

        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").should("be.visible").click()
        cy.wait(1500)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.wait(1500)

        cy.go("back")
        cy.go("back")

        cy.go("forward")
        cy.go("forward")
    })
    it.only("navegacion reload", () =>{
        cy.visit("https://demoqa.com/")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)

        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").should("be.visible").click()
        cy.wait(1500)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click()
        cy.wait(1500)

        cy.get('#userName').should("be.visible").type("Ramon")
        cy.get('#userEmail').should("be.visible").type("Ramon@gmail.com")
        cy.wait(1500)
        cy.reload()
        cy.wait(1500)
        cy.go("back")
    })
})