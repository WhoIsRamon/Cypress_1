/// <reference types="Cypress" />

describe("tablas", () =>{

    it("children", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get(".btn-group").children(".btn-success")
        cy.wait(1500)
        cy.get(".btn-group").children(".btn-success").should("contain", "Green").click()
        cy.wait(1500)
        cy.get(".btn-group").children(".btn-danger").should("contain", "Red").click()
    })
    it("seleccionando por eq", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get("[type='button']").eq(2).should("contain", "Orange").click()
        cy.wait(1500)
        cy.get("[type='button']").eq(4).should("contain", "All").click()
    })
    it("Filter", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get("[type='button']").filter(".btn-warning")
        cy.get("[type='button']").filter(".btn-success")
        cy.wait(1500)
        cy.get("[type='button']").filter(".btn-success").click()
        cy.wait(1500)
        cy.get("[type='button']").filter(".btn-warning").should("contain", "Orange").click()
    })
    it("Find", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click()
        cy.wait(1500)
        cy.get("[type='button']").contains("Orange").click()
    })
    it("First y last", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get(".btn-group").find("button").first().click()
        cy.wait(1500)
        cy.get(".btn-group").find("button").last().click()
    })
    it("NextAll", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get("[type='button']").should("contain", "Green")
        cy.wait(1500)
        cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4)
    })
    it("Seleccionamos elemento padre", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get("[type='button']").parent().should("have.class", "btn-group")
    })
    it("Reto de las tablas", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        cy.get("[type='button']").eq(1).should("contain", "Green").click()
        cy.wait(1500)
        cy.get("[type='checkbox']").check({force:true})

        cy.get("[type='button']").eq(4).should("contain", "All").click()
        cy.wait(1500)
        cy.get("[type='checkbox']").check({force:true})
    })
    it("Reto de las tablas con For", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        for(let x=1;x<=4;x++){
            cy.get("[type='button']").eq(x).click()
            cy.wait(1500)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(1500)
        }
    })
    it("Reto de las tablas con For y Asserts", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title('eq', 'Selenium Easy - Table Data Filter Demo')
        cy.wait(1500)

        for(let x=1;x<=4;x++){
            let nombreBoton=""
            if(x==1){
                nombreBoton="Green"
            }else if(x==2){
                nombreBoton="Orange"
            }else if(x==3){
                nombreBoton="Red"
            }else if(x==4){
                nombreBoton="All"
            }
            
            cy.get("[type='button']").eq(x).should("contain", nombreBoton).click()
            cy.wait(1500)
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(1500)
        }
    })
    it("Mostrando los campos", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title('eq', 'Selenium Easy - Tabel Sort and Search Demo ')
        cy.wait(1500)

        const datos=[]
        cy.get('.odd td, .even td').each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0;i<=datos.length;i++){
                cy.log(datos[i])
            }
        })

    })
    it("Sumando los valores de  los campos con la clase .odd", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title('eq', 'Selenium Easy - Tabel Sort and Search Demo ')
        cy.wait(1500)

        const datos=[]
        let cantidadOdd=0 //la necesitamos para la suma

        cy.get("[role='row'] td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0;i<=datos.length;i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log("La cantidad total es: " +cantidadOdd)
            expect(cantidadOdd).to.eq(394)
        })
    })
    it.only("Valor de un campo en especifico", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title('eq', 'Selenium Easy - Tabel Sort and Search Demo ')
        cy.wait(1500)

        const campo=cy.get('tbody > :nth-child(7) > :nth-child(2)') //se selecciona el primer valor
        campo.each(($el,index,$list)=>{ //lo recorro
            const dato=$el.text() //obtenemos el campo, el texto
            cy.log(dato)

            if(dato.includes("Javascript Developer")){ //lo validamos con el if
                campo.eq(index).next().next().then((age)=>{ //agarramos el indice y nos corremos dos veces para la derecha, estamos guardando una variable age para asignarle la edad despues
                    const edad=age.text()
                    cy.log(edad)
                    cy.log("La edad de javascript developer es de: " +edad)
                    expect(edad).to.equal('39')
                })
            }
        })
    })
})