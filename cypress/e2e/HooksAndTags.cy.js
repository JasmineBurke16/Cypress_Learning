describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log("****** Launch app *******");
    })

    after(()=>{
        cy.log("***** close app ******");
    })

    beforeEach(()=>{
        cy.log("****** Login ********") 
    })

    afterEach(()=>{
        cy.log("****** log out ******")
    })

    it('search',()=>{

        cy.log("******* searching *******")

    })

    it('advanced search',()=> {

        cy.log("******* advanced search *******")

    })

    it('Listing Products',()=>{

        cy.log("******* Listing Products *******")

    })
})