const { describe } = require("mocha");

describe('Handle tabs',(()=>{


    it.skip('Appracohl',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab
        
        //Open link in the same tap
        cy.get('.example >a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000);
        cy.go('back'); // back to parent tab
    
    })

    it('Approach2',()=>{


        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab
        
        cy.get('.example >a').then((e)=>{

            let url = e.prop('href')
            cy.visit(url)
      
    })

    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(5000);
    cy.go('back');

     })
}))