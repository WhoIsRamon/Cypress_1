/// <reference types="Cypress" />

require('cypress-xpath')

describe("Alerts", () =>{

    it("Alerts 1", () =>{
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        cy.wait(1500)

        cy.xpath("//a[@href='#myModal0']").click()
        cy.wait(1500)
        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click()

        cy.xpath("//a[@href='#myModal0']").click()
        cy.wait(1500)
        cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click()
    })
})