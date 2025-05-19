describe('CSSLocators', () => {

it("csslocators", () => {

    cy.visit("http://www.automationpractice.pl/index.php") 

    cy.get("[id='search_query_top']").type("T-Shirts")

    cy.get("[name='submit_search']").click()

    cy.get("[class='lighter']").contains("T-Shirts")
    ///Optional ".ligther"



   

    



})

})