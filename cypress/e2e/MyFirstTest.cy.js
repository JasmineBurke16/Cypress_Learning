
describe('My First test', () => {
    it ('Verify title-positive', function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM')
    
    })

    it ('Verify title-Negative', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM123')
    
    })
})