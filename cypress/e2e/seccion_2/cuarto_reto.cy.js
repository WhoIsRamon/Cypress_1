/// <reference types="Cypress" />

require('cypress-xpath')

describe("Asserts", () =>{

    it("Asserts find, eq", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title("eq", 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(1500)

        let a=500
        let b=100

        cy.get('#value1').should("be.visible").and("have.class", "form-control").type(a)
        cy.wait(1500)
        cy.get('#value2').should("be.visible").and("have.class", "form-control").type(b)
        cy.wait(1500)
        cy.contains("[type='button']", "Get Total").should("be.visible").click()

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            cy.log(e.text())
            let resultado=e.text()
            if(resultado >= 1000){
                a=a+60
                b=b+40
                cy.wait(1500)
                cy.get('#value1').should("be.visible").and("have.class", "form-control").clear().type(a)
                cy.wait(1500)
                cy.get('#value2').should("be.visible").and("have.class", "form-control").clear().type(b)
                cy.wait(1500)
                cy.contains("[type='button']", "Get Total").should("be.visible").click()
            }else{ //en este else estamos usando el invoke
                a=a-50
                b=b-10
                cy.get('#value1').invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
                    cy.get('#value1').clear().type(a)
                    cy.wait(1500)
                    cy.get('#value1').invoke("attr", "style", "color:red")
                })
                cy.wait(1500)
                cy.get('#value2').invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
                cy.wait(1500)
                cy.get('#value2').clear().type(b)
                cy.wait(1500)
                cy.get('#value2').invoke("attr", "style", "color:blue")
                cy.contains("[type='button']", "Get Total").should("be.visible").click()
               })
            }
        })
    })
})