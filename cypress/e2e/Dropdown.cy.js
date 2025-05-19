describe ('handle dropdown',()=>{

    it.skip('Dropdown with selection', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
        .select("Thailand")
        .should('have.value','Thailand') 
    })

    it.skip('Auto suggest dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Black')
        cy.get('.suggestion-title').contains('Blackpink').click()

    })
    it('Dynamic drop', ()=>{

        cy.visit("https://www.google.com")
        cy.get("textarea[name='q']").type('cypress automation')
        cy.get('div.wM6W7d>span').each( ($el, index,$list)=>{
            if($el.text()=='cypress automation')
            {
                cy.wrap($el).click()
            }


        })
       

    })

}) 