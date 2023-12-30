import ProyectoUno_PO from "../../support/PageObjects/ProyectoUno_PO/proyectoUno_PO.cy"
/// <reference types="Cypress" />

require('cypress-xpath')

describe("Page Objects Models", () =>{

    const master=new ProyectoUno_PO() //creamos un nuevo objeto de tipo proyecto uno y guarda todo en master

    master.visitHome()

    Cypress.on('uncaught:exception', (err, Runnable) =>{
        return false
    })

    it("test seccion uno", () =>{
        cy.log("Hola")
        master.SeccionUno("Carlos", "Ricardo", "ramic@nuceo.com",1000)
    })
    it("test seccion dos", () =>{
        cy.log("Hola 2")
        master.SeccionDos("115688", "Juncal no falla", "Vail", "Colorado",1000)
        cy.Validar_Campo("(//small[contains(@class,'help-block')])[8]", "Please supply a vaild phone number with area code", "tel")
    })
    it.only("test seccion tres", () =>{
        cy.log("Hola 3")
        master.SeccionTres("1770", "Website", "Desc",1000)
        cy.Validar_Campo("(//small[contains(@class,'help-block')])[16]", "Please enter at least 10 characters and no more than 200", "proyecto")
    })
    
    it("test seccion tres version 2", () =>{
        cy.log("Hola 3.2")
        master.SeccionUno("Carlos", "Ricardo", "ramic@nuceo.com",1000)
        master.SeccionDos("1156884411", "Juncal no falla", "Vail", "Colorado",1000)
        master.SeccionTres("1770", "Website", "Descripción",1000)
    })

    //para configurar el tiempo de carga se puede hacer desde cypress.config.js
    //o para aplicarle tiempo a los asserts, ej: .should("be.visible", {timeout:15000}). Significa que si esta mal hecho va a tardar 15 segundos en encontrarlo
})