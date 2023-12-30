/// <reference types="Cypress" />

describe("Bucles for y each", () =>{

    it("For uno", () =>{
        
        for(let i=1; i<=10; i++){
            cy.log("Numero: " +i)
        }
    })
    it("For dos", () =>{
        
        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + "x" + i + "=" + t*i)
        }
    })
    it("Each uno", () =>{
        cy.visit("https://kingofthekongo.com.ar/shop/prendas1/remerones/")
        cy.title(). should('eq', 'Comprar REMERONES en King of the Kongo')
        cy.wait(1500)

        cy.get(".container-fluid").each(($el, index, $list)=>{
            let remeron=$el.text()
            cy.log(remeron)
        })
    })
    it.only("Each dos", () =>{
        cy.visit("https://kingofthekongo.com.ar/shop/prendas1/remerones/")
        cy.title(). should('eq', 'Comprar REMERONES en King of the Kongo')
        cy.wait(1500)

        cy.get(".container-fluid").each(($el, index, $list)=>{
            let remeron=$el.text()
            if(remeron.includes("Remeron Vatikano")){
                cy.wrap($el).click({force: true})
            }
        })
    })
    //en esta pagina usó una que ya no está disponible. Yo use otra pero no funciona de la misma manera, no entendi mucho los ejercicios
    //luego usando el each cambiaba la cantidad del carrito y del talle, los ulitmos videos de la seccion 21
})
