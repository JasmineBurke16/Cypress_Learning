import 'cypress-iframe'
describe("handling frames",()=>{

    it('appraoch1',()=>{

        cy.visit("https://autotest.how/demo/tinymce");
        const iframe=cy.get('#tinymce_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        // พิมพ์ Welcome และกด Bold
        iframe.clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })
    
// เรียกใช้ iframe จาก commands

it('appraoch2 - by using custom command ',()=>{

    cy.visit("https://autotest.how/demo/tinymce");
       cy.getIframe('#tinymce_ifr').clear().type("Hello {enter} Wold {ctrl+a}");
       cy.get("[aria-label='Bold']").click();
      

    })

// เรียกใช้ iframe จาก plugin

    it('appraoch3 - by using cypress-iframe plugin ',()=>{

        cy.visit("https://autotest.how/demo/tinymce");
        //load frame
        cy.frameLoaded('#tinymce_ifr'); 
        cy.iframe('#tinymce_ifr').clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

    })
})
