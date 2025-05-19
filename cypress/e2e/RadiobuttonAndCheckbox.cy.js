
describe("Check UI Elements", () => {
    it("Check Radio Button", () => {

        cy.visit("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
        cy.get('#prefix').should('be.visible')
        cy.get('#prefix').select('Ms.')
        cy.get('#firstname').type('Worarat')
        cy.get('#lastname').type('Burke')
        cy.get('input[type="radio"]').should('be.visible')
        cy.get('#current').click()
        cy.get(':nth-child(3) > .col-sm-10 > .form-control').type('Tony')
        cy.get('[name="mothername"]').type('Weawdow')
        cy.get('#passport').check().should('be.checked')
        cy.get('#studentid').check().should('be.checked')
        cy.get('#passport').uncheck().should('not.be.checked')
        cy.get('[id="identity_number"]').type('123456789')
        cy.get('#female').click()
        cy.get('#dob_month').select('October')
        cy.get('#dob_date').select('16')
        cy.get('#dob_year').select('2002')

        ///Span dropdown 
        //    cy.get('[name="marital_status"]').each(($el) => {
        //     cy.wrap($el).closest('label').then(($label) => { // Ensure we are checking within the correct scope
        //         if ($label.text().trim().includes("Single")) {
        //             cy.wrap($el).check();
        //             }

        ///Or
        cy.contains('label', 'Single').click();

        cy.get('#country_code').select('Thailand (+66)')
        cy.get('[id="mobile"]').type('064865464')
        cy.get('[id="nationality"]').select('Thai')
        cy.get('[name="address"]').type('test test test')
        cy.get('#country').select('Thailand')
        cy.get('[value="Submit"]').click()


    });
});




