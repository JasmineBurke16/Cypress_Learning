 describe('File Uploads',(()=>{

    it.skip('Single File Upload',()=>{

        cy.visit('https://qa-automation-practice.netlify.app/file-upload.html');
        cy.get('#file_upload').attachFile('TestPDF.pdf');
        cy.get('[class="btn btn-primary"]').click();
        cy.wait(2000);
        cy.get('[id="file_upload_response"]').should('contain.text','You have successfully uploaded');

    })

    it.skip('File Upload - Rename',()=>{
        
        cy.visit('https://qa-automation-practice.netlify.app/file-upload.html');
        cy.get('#file_upload').attachFile({filePath:'TestPDF.pdf', fileName:'TestRename.pdf'});
        cy.get('[class="btn btn-primary"]').click();
        cy.wait(2000);
        cy.get('[id="file_upload_response"]').should('contain.text','You have successfully uploaded');

    })

    it('Multiple file upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['TestPDF.pdf','TestPDF2.pdf']);
        cy.wait(2000);
        cy.get('#filesToUpload').should('exist');
    })


 }))