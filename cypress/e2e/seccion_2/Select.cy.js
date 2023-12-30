/// <reference types="Cypress" />

describe("Selects", () =>{

    it("Selects uno", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title("eq", 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        //selects sería cuando clickeas en una opcion y se te despliega una lista para que eligas una
        cy.get('#select-demo').should("be.visible").select("Friday").should("have.value", 'Friday') //con el ultimo .should estamos validando tambien por parametros
        cy.wait(2000)
        cy.get('#select-demo').should("be.visible").select("Sunday").should("have.value", 'Sunday')
    })
    it("Selects dos en pagina google", () =>{
        cy.visit("https://www.google.com/?hl=es")
        cy.title("eq", 'Google')
        cy.wait(1000)

        cy.get("[name= 'q']").should("be.visible").type("Ferrari").type("{enter}")
    })
    it.only("Selects tres multi selects", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title("eq", 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        cy.get('#multi-select').should("be.visible").select(["California", "Ohio", "Washington"]).then(()=>{
            cy.get('#printMe').should("be.visible").click()
        })
    })
})