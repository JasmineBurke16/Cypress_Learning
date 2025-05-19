

describe('XpathLocator', () =>{

    it('Go to best seller page',() =>{

        cy.visit("http://www.automationpractice.pl/index.php") 
        cy.xpath('//*[@id="home-page-tabs"]/li[2]/a').click()
    })

    
    it('chained xpath',() =>{

        cy.visit("http://www.automationpractice.pl/index.php") 
        cy.xpath('//*[@id="home-page-tabs"]/li[2]/a').click()
        cy.xpath('//*[@id="blockbestsellers"]').xpath("./li").should('have.length',6)
        
    })
})