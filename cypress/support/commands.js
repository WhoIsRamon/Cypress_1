// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_Visible', (selector, texto, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Texto_Visible_xpath', (selector, texto, t) => {
    let tiempo=t
    cy.xpath(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Click', (selector, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Click_force', (selector, t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Click_force_xpath', (selector, t) => {
    let tiempo=t
    cy.xpath(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
 })

 //funciones por conjunto
 //creando la funcion para toolsqa
 Cypress.Commands.add('Bloque_demoqa', (name, email, dir1, dir2, t) => {
    let tiempo=t
    cy.get('#userName').should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get('#userEmail').should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get('.col-md-9 > #currentAddress').should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get('.col-md-9 > #permanentAddress').should("be.visible").type(dir2)
    cy.wait(tiempo)
    cy.get('#submit').should("be.visible").click()
 })
 Cypress.Commands.add('Bloque_reto_SeleniumEasy', (name, lastname, email, telefono, dir, city,estado, CP, Website, descripcion, t) => {
    let tiempo=t
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(lastname)
    cy.wait(tiempo)
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(telefono)
    cy.wait(tiempo)
    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(dir)
    cy.wait(tiempo)
    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(city)
    cy.wait(tiempo)
    cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true})
    cy.wait(tiempo)
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(CP)
    cy.wait(tiempo)
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(Website)
    cy.wait(tiempo)
    cy.get(':nth-child(1) > label > input').check().should("be.checked")
    cy.wait(tiempo)
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(descripcion)
    cy.wait(tiempo)
    cy.get('.btn').should("be.visible").click({force:true})
 })

 Cypress.Commands.add('Validar_Campo', (selector, msj, nombre_campo, t) => {
    cy.xpath(selector).should("be.visible").should("contain", msj).then((val) =>{
        cy.log("#######################")
        cy.log("El "+ nombre_campo +" no es valido" )
        cy.log("#######################")
    })
 })