describe('Handle Tables', () => {
    
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   
    });

        it.skip('Check Number of Rows & Columns', () => {
            cy.get('table[class="table-display"]>tbody>tr')
            .should('have.length','11'); // ตรวจสอบว่ามี 11 แถว

            cy.get('table[class="table-display"]>tbody>tr>th')
            .should('have.length','3');
    
        });

        it.skip('Check cell data from specific row & column',()=>{
            cy.get('table[class="table-display"]>tbody>tr')
            .contains("Appium (Selenium) - Mobile Automation Testing from Scratch")
            
            cy.get('table[class="table-display"]>tbody>tr:nth-child(3)')
            .contains("Learn SQL in Practical + Database Testing from Scratch")

            // เอาข้อมูลคอลัมที่3ของแถวแรก
            cy.get('table[class="table-display"]>tbody>tr:nth-child(2)>td:nth-child(3)')
            .invoke('text').should('eq', '30');

        });

        it.skip('Read all the rows & columns data in the first page',()=>{
            
            cy.get('table[class="table-display"]>tbody')
            .each(($row, index, $rows)=>{

                cy.wrap($row).within( ()=>{

                    cy.get("td").each(($col, index, $cols)=>{
                        cy.log($col.text());
                        
                    })
                })
            })
        });
    });

describe('Handel Pagination',()=>{
   // it('Find total number of page', () => {
      //  cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');
      //  let totalPages;
      //  cy.get('[class="dataTables_info"]').then((e)=>{
          //  let mytext=e.text(); 
          //  totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
          //  cy.log("Showing 1 to 3 of  =====>"+totalPages);
   //     })
   // })
   
   it('Pagination is visible',()=>{
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');
   
    cy.get('.pagination').should('be.visible');
    cy.get('.pagination').contains('2').click();
    
    cy.get('.pagination').contains('2').click();
    cy.get('table tbody tr').first().should('contain', 'Emma Brown');
    
    cy.get('.pagination').contains('Next').click();
cy.get('table tbody tr').first().should('contain', 'John Doe');

    cy.get('.pagination').contains('Previous').click();
cy.get('table tbody tr').first().should('contain', 'Emma Brown');

cy.get('.pagination li.active').should('contain', '2');


   })


})