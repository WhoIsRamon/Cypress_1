class ProyectoUno_PO{

    visitHome(){
        let tiempo=1000
        beforeEach(() =>{
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations")
            cy.wait(tiempo)
        })
    }
    SeccionUno(name, lastname, email,t){
        let tiempo=t
        cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(name)
        cy.wait(tiempo)
        cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(lastname)
        cy.wait(tiempo)
        cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(email)
        cy.wait(tiempo)
    }
    SeccionDos(telefono, dir, city,estado, t){
        let tiempo=t
        cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(telefono)
        cy.wait(tiempo)
        cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(dir)
        cy.wait(tiempo)
        cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(city)
        cy.wait(tiempo)
        cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true})
        cy.wait(tiempo)
    }
    SeccionTres(CP, Website, descripcion, t){
        let tiempo=t
        cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(CP)
        cy.wait(tiempo)
        cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(Website)
        cy.wait(tiempo)
        cy.get(':nth-child(1) > label > input').check().should("be.checked")
        cy.wait(tiempo)
        cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(descripcion)
        cy.wait(tiempo)
        cy.get('.btn').should("be.visible").click({force:true})
    }
}

export default ProyectoUno_PO