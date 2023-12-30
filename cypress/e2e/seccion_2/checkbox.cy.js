/// <reference types="Cypress" />

describe("Nueva seccion checkbox", () =>{

    it("Check uno", () =>{
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title("eq", 'Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked") //para tildar las opciones
        cy.wait(3000)
        cy.get("[type='checkbox']").uncheck({force: true}).should("not.be.checked") //para destildarlas (tuve que agregar el force true porque tiraba error sino)

        cy.get('#isAgeSelected').check().should("be.checked")
        cy.get(':nth-child(6) > label > .cb1-element').check().should("be.checked")  //se puede usar tambien el click en vez del check
    })

    it.only("Check radio button", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title("eq", 'Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000)

        cy.get('.panel-body > :nth-child(2) > input').check().should("be.checked")
    })
})