


describe("Assertion demo", () => {

    it("implicit assertions", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        ///should and

        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq', "OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.get("a").should('have.length','5') // No of inks

        ///Login

        //cy.get('[name="username"]').type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[name="password"]').should('have.value','admin123')
        cy.get('[type="submit"]').click()

        ///Enter websit
        cy.url().should('include','/dashboard')
        ///User check 
         cy.get('[class="oxd-userdropdown-name"]').should('contain','manda user')
        
         ///User check 
         let expName= "manda user1"
         cy.get("oxd-userdropdown-name").then( (x) => {

            let actName=x.text()

            ///BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            ///TDD style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)




         })


    })


})