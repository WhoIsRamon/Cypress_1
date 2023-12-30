/// <reference types="Cypress" />

describe("Selects", () =>{

    it("Selects uno", () =>{
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title("eq", 'Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000)

        cy.get(':nth-child(1) > .form-control').should("be.visible").select(["Alice", "Laura", "Maria Luiza"]).then(()=>{
            cy.wait(2000)
            cy.get('.pAdd').should("be.visible").click().then(()=>{
                cy.wait(2000)
                cy.get('.pAddAll').should("be.visible").click().then(()=>{
                    cy.wait(2000)
                    cy.get('.pRemoveAll').should("be.visible").click()
                    cy.wait(2000)
                    cy.log("Esto es un print, se removieron todos los elementos")
                })
            })
        })          
    })
})