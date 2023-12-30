/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, Runnable) =>{
    return false
})

describe("Carga por fixture", () =>{
    /*
    before(function(){
        cy.fixture('datos').then(function(data){
            globalThis.data=data
        })
    })
    
   before(function(){
    cy.fixture("datos").as("datos_json") //por alias
   })
   */

    it("test uno cargando desde json", () =>{
        //cy.visit("https://demoqa.com/text-box")
       // cy.title().should("eq", "DEMOQA")
       // cy.wait(1000)

       cy.fixture("excel_to_json").then(testdata =>{ //antes teniamos la nuestra de datos.json pero luego desde la pagina de mockaroo se pueden generar automaticamente todos los campos que quieras y es mas rapido. Terminó quedano la del archivo de excel
        testdata.forEach(data => {
            const d_nombre=data.nombre
            const d_email=data.email
            const d_dir1=data.dir1
            const d_dir2=data.dir2

            cy.visit("https://demoqa.com/text-box")
            cy.title().should("eq", "DEMOQA")
            cy.wait(1000)

            cy.get('#userName').should("be.visible").type(d_nombre)
            cy.wait(1000)
            cy.get('#userEmail').should("be.visible").type(d_email)
            cy.wait(1000)
            cy.get('#currentAddress').should("be.visible").type(d_dir1)
            cy.wait(1000)
            cy.get('#permanentAddress').should("be.visible").type(d_dir2)
            cy.wait(1000)
            cy.get('#submit').should("be.visible").click()
        });
       })
    })
})