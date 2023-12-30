/// <reference types="Cypress" />

require('cypress-xpath')

describe("Reto hooks", () =>{

    beforeEach(() =>{ //el profe lo hace con solo before pero no me funca a mi
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.wait(1500)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.wait(1500)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.wait(1500)
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)
    })
    after(() =>{
        cy.log("#### Fin de ciclo ####")
        cy.wait(1500)
        cy.xpath("//i[contains(@class,'oxd-icon bi-caret-down-fill oxd-userdropdown-icon')]").should("be.visible").click()
        cy.wait(1500)
        cy.xpath("//a[@href='/web/index.php/auth/logout'][contains(.,'Logout')]").should("be.visible").click()
        cy.wait(1500)

    })

    it("test uno", () =>{
        cy.xpath("//a[@href='/web/index.php/admin/viewAdminModule']").should("be.visible").click()
        cy.wait(1500)
    })
    it("test dos", () =>{
        cy.xpath("//a[@href='/web/index.php/directory/viewDirectory']").should("be.visible").click()
        cy.wait(1500)
    })
    it("test tres", () =>{
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Directory')]").should("be.visible").click()
        cy.wait(1500)
    })
})