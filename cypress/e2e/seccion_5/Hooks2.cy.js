/// <reference types="Cypress" />

require('cypress-xpath')

describe("hooks ejemplos", () =>{

    beforeEach(() =>{
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1500)
    })

    it("test 1", () =>{
        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(1500)
    })
    /*
    it("test 2", () =>{
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
        cy.wait(1500)
    })
    */
    it("test 3", () =>{
        cy.xpath("(//input[contains(@type,'checkbox')])[7]").check()
        cy.wait(1500)
    })
})