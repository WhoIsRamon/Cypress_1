/// <reference types="Cypress" />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe("Eventos del mouse", () =>{

    it("Drag and Drop", () =>{
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title('eq', 'The Internet')
        cy.wait(1000)

        cy.get('#column-a').drag('#column-b', {force:true})
    })
    it("Drag and Drop 2", () =>{
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title('eq', 'Selenium Easy Demo - Drag and Drop Demo')
        cy.wait(1000)

        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone')
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone')
    })
    it("mouse over", () =>{
        cy.visit("https://way2automation.com/")
        cy.title('eq', 'Get Online Selenium Certification Course | Way2Automation')
        cy.wait(1000)

        cy.contains("Video Tutorial").trigger('mouseover')
        cy.contains("Selenium Python Tutorial").invoke("removeAttr", "target").click()
        //no funciona este ejemplo porque la pagina se actualizó. Pero la primera linea de cod es para cuando un boton, apoyas el mouse arriba y se desplega una lista.
        //y la segunda linea es para cuando tocas en un boton y se te abre una pestaña nueva automaticamente, y justamente es para que siga en la misma en cypress
    })
    it.only("Slider", () =>{
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title('eq', 'Selenium Easy - Drag and Drop Range Sliders ')
        cy.wait(1000)

        cy.get('#slider1 > .range > input').invoke("attr", "value", 80)
        cy.wait(1000)
        cy.get('#slider3 > .range > input').invoke("attr", "value", 80)
        cy.wait(1000)
        cy.get('#slider5 > .range > input').invoke("attr", "value", 80)
    })
})
