describe('chetakbajaj',()=>{
    it('test1',()=>{
        // cy.visit('https://uat-bajaj-chetak.cartradeexchange.com/')
        cy.visit('https://php8-bajaj-chetak.cartradeexchange.com/')
        cy.wait(4000)
        cy.get('#processed_btn').click({force:true})
        cy.wait(1000)
        cy.get('.col5 > .form-control').type('chetak')
        cy.get('.col6 > .form-control').click({force:true})
        cy.get('.col6 > .form-control').type('8')
        // cy.get('#mobile').type('8')
        cy.get('.col6 > .form-control').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.detect-btn').click({force:true})
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').click({force:true})
        // cy.get(':nth-child(3) > :nth-child(2) > .form-control').Date(1990-2-5)
        cy.xpath("//input[@type='date']").type('2001-12-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(3000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        cy.get('#otp_block > .main-block > .col-12.mt-3 > .btn').click({force:true})
        cy.wait(6000)
        cy.get('.accordion-button').click({force:true})
        cy.get('.rupee-icon > #loan_amount').clear().type('14000')
        cy.get('.t-months > #loan_amount').click({force:true})
        cy.get('.t-months > #loan_amount').clear().type('24')
        // cy.get('.total-loan-amount > span').should('have.value','1,28,001')
        // cy.get(':nth-child(4) > .card-body > .fee-price-asset new>').should('be.equal','1750')

       

    })


})