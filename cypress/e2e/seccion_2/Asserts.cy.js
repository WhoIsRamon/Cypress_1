/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

require('cypress-xpath')

describe("Asserts", () =>{

    it("Asserts find, eq", () =>{
        cy.visit("https://www.automationexercise.com/")
        cy.title("eq", 'Automation Exercise')
        cy.wait(1000)

        cy.get(".col-sm-4").find(".choose").eq(0).click()
    })
    it("Asserts find, eq, validando texto", () =>{
        cy.visit("https://www.mercadolibre.com.ar/xiaomi-redmi-12c-dual-sim-128-gb-4-gb-ram-gris-grafito/p/MLA22307921?pdp_filters=category:MLA1051%7Cdeal:MLA779357-15#searchVariation=MLA22307921&position=2&search_layout=grid&type=product&tracking_id=2673a084-b6aa-4fa7-a0c3-83ca9376e194&deal_print_id=37f0cde0-97bf-11ee-b3b2-5d92735ff43a&c_id=carouseldynamic-home&c_element_order=undefined&c_campaign=%F0%9F%92%AB-LAS-MEJORES-OFERTAS-%F0%9F%92%AB&c_uid=37f0cde0-97bf-11ee-b3b2-5d92735ff43a")
        cy.title("eq", '(1) Xiaomi Redmi 12C Dual SIM 128 GB 4 GB RAM Gris Grafito | Envío gratis')
        cy.wait(1000)

        cy.get(".ui-pdp-subtitle").then((e)=>{
            //cy.log(e.text())
            let estado=e.text()
            //cy.log(estado)
            if(estado=="Nuevo"){
                cy.log("Todo corrio piola") //no me valida bien el texto pero bueno, corre bien
            }
        })
        cy.get(".andes-money-amount__fraction").then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(7,14)
            cy.log(precio)

            if(precio > 150000){
                cy.log("No lo compramos")
            }else{
                cy.log("Lo re compramos papa de dio")
                cy.xpath("//span[@class='andes-button__content'][contains(.,'Agregar al carrito')]").click()
            }
        })
    })
    it("Asserts contain.text y have.text", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").type("Ramiro")
        cy.get('#userEmail').should("be.visible").type("Ramiro@yahoo.com")
        cy.get('#submit').should("be.visible").click()

        cy.get("#name").should("have.text", "Name:Ramiro") //estamos validando el texto que nos arrojó una vez que pusimos los datos
        cy.get('#email').should("contain.text", "Ramiro@yahoo.com")
    })
    it("Asserts have.text + then", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").type("Ramiro")

        cy.get("#userName").should("have.value", "Ramiro").then(()=>{ //si en el primer campo dice ramiro, completá todo lo demas
            cy.get('#userEmail').should("be.visible").type("Ramiro@yahoo.com")
            cy.get('#submit').should("be.visible").click()
        })
    })
    it("Asserts have class", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").should("have.class", "mr-sm-2").then(()=>{ //validando por clase
            cy.get('#userName').type("Ramiro")
        })
    })
    it("Asserts have class + and", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").and("have.class", "mr-sm-2").then(()=>{ //validando por clase y que sea visible, se tienen que cumplir ambas para que corra
            cy.get('#userName').type("Ramiro")
        })
    })
    it("Asserts not have class", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").and("not.have.class", "mr-sm-awdadw2").then(()=>{ //hacemos la validacion de la clase del modo inverso
            cy.get('#userName').type("Ramiro")
        })
    })
    it("Asserts length y css", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title("eq", 'Selenium Easy - Table with Pagination Demo')
        cy.wait(1000)

        cy.get("#myTable >tr >td").should("have.length", "91").and("have.css", "padding", "8px") //estamos validando que tiene 91 campos y tambien estamos validando por css
    })
    it.only("Contains", () =>{
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title("eq", 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        cy.get('.form-group > #user-message').should("be.visible").type("Viva La Libertad Carajo")
        cy.contains("[type='button']", "Show Message").should("be.visible").click() //existen varios button, entonces pusimos el contain para tambien ponerle el mensaje del boton
    })
})