/// <reference types="Cypress" />

require('cypress-xpath')

describe("Reto de comandos", () =>{

    beforeEach(() =>{
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
        cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations")
        cy.wait(1500)
    })

    it("RETO", () =>{
        cy.Bloque_reto_SeleniumEasy("Ramiro", "Souto", "rama@nucleiu.com", "1156487563", "juncal 468", "Ezeiza", "Florida", "1770", "www.caca.com", "I wanna be the best developer of the world", 100)
    })
    it.only("Prueba invalida por nombre", () =>{
        cy.Bloque_reto_SeleniumEasy("R", "Souto", "rama@nucleiu.com", "1156487563", "juncal 468", "Ezeiza", "Florida", "1770", "www.caca.com", "I wanna be the best developer", 100)
        cy.Validar_Campo("(//small[contains(@class,'help-block')])[1]", "Please enter more than 2 characters", "NOMBRE")
    })

    it("Prueba por apellido", () =>{
        cy.Bloque_reto_SeleniumEasy("4165456", "Souto", "rama@nucleiu.com", "1156487563", "juncal 468", "Ezeiza", "Florida", "1770", "www.caca.com", "I wanna be the best developer of the world", 100)
    })

    it("Prueba invalida por mail", () =>{
        cy.Bloque_reto_SeleniumEasy("4165456", "Souto", "DEMO.com", "1156487563", "juncal 468", "Ezeiza", "Florida", "1770", "caca.com", "I wanna be the best developer", 100)
        cy.Validar_Campo("//small[contains(@data-bv-validator,'emailAddress')]", "Please supply a valid email address", "EMAIL")
    })

    it("Prueba por fecha", () =>{
        cy.Bloque_reto_SeleniumEasy("4165456", "Souto", "rama@nucleiu.com", "1156487563", "juncal 468", "Ezeiza", "Florida", "1770", "www.caca.com", "I wanna be the best developer of the world", 100)
    })

    //ACA ES UN CLARO EJEMPLO COMO PODEMOS IR COPIANDO Y CREANDO FACILMENTE LAS DIFERENTES PRUEBAS PARA IR VALIDANDO DIFERENTES CAMPOS
})