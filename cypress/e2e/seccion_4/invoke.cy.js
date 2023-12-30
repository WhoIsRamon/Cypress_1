/// <reference types="Cypress" />

require('cypress-xpath')

describe("Invoke", () =>{

    it("Invoke text", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1500)

        cy.get('.page-body > :nth-child(5)').invoke("text").as("Info")
        cy.get("@Info").should("contain", "The information will be submitted to the server if it passes client side validation.")

        cy.get('[for="firstname"]').invoke("text").as("subtitulo")

        cy.get("@subtitulo").should("contain", "First name:").then(()=>{
            cy.get('#firstname').type("Ramiro")
        })
    })
    it("Invoke estilos", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1500)

        cy.get('[for="firstname"]').invoke("attr", "style", "color:Red; font-size: 80px")
    })
    it("Invoke ocultar y mostrar", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.wait(1500)

        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(1500)
        cy.get('[for="firstname"]').invoke("show", "2s")
        cy.get('#firstname').invoke("show", "2s")
    })
    it("Invoke reto", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(1500)

        cy.get('#firstname').should("be.visible").type("Ramiro").then(()=>{
            cy.get('[for="surname"]').invoke("show", "2s")
            cy.get('#surname').invoke("show", "2s")
            cy.get('#surname').should("be.visible").type("Angel Souto")
        })
    })
    it("Invoke src", () =>{
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        cy.wait(1500)

        cy.xpath("//img[@src='http://demo.seleniumeasy.com/img/930_180.png']").invoke("attr", "src").should("include", "img/930_180.png") //Estamos validando la imagen
    })
    it.only("Invoke target blank", () =>{
        cy.visit("https://dvwa.co.uk/?caf&&query=Web+Application+Security+Scanner&afdToken=ChMIkK-o-5OfgwMV8yu5Bh3auQeUEnABlLqpj7FV2ULLZA2g7GGNePv3Ni-BucYy6WU4wkiDXwhGneINP3BQvyIgD-sc4kbvqMZ5trsEca62zUdkMhC8UmIHqPQLmeryEjDf7YEq-b847RmSJgVvteqnrv76vY1vCEx2NuL0CXb0RKvCfdb6&pcsa=false&nb=0&nm=2&nx=244&ny=65&is=700x480&clkt=83")
        cy.title().should("eq", "Dvwa.co.uk")
        cy.wait(1500)

        cy.xpath("//span[@class='p_ si22 span'][contains(.,'➤ Acceder al sitio web')])[1]").invoke("attr", "target").click() //no funca pero es para que cuando clickeas en un boton, no se abra en otra pesataña
    })
})