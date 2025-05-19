describe("Mouse Operations",()=>{
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/');
      });

    it.skip('MouseHover',() =>{

        cy.get('[class="dropbtn"]').trigger('mouseover').click();
        //cy.get('.mouse-hover-content').should('be.visible')
        cy.get('[class="dropdown-content"]').invoke('show')
        cy.contains('Mobiles').click();

    })

    it.skip('Double click',()=> {

        cy.get("button[ondblclick='myFunction1()']").dblclick()
        cy.get('[id="field2"]').should('have.value','Hello World!')

    })

   // it('Right click',()=>{
     //   cy.visit('https://practice.expandtesting.com/context-menu#google_vignette')
       // cy.get('[id="hot-spot"]').rightclick();
      //  cy.on('window:alert',(text)=>{
          //  expect(text).to.contains('You selected a context menu')
      //  })

      it('Drag and Droup using plugin', ()=> {

        cy.get('[id="draggable"]').drag('[id="droppable"]', {force: true})
        cy.get('[id="droppable"]').invoke('text').should('include','Dropped!')

      })

      it.only('Scolling page', () =>{
        cy.get('#PageList1 > .widget-content > ul > :nth-child(1) > a').scrollIntoView({duration:2000})
        cy.get('#PageList1 > .widget-content > ul > :nth-child(1) > a').should('be.visible');



      })



  



})