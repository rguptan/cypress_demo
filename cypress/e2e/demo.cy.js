describe('Demo Test Suite', function () {
    beforeEach(function () {
        cy.visit('/');
    });
    it('Verify Landing Page', () => {
        cy.url().should('include', 'airtable');
    });
    for (let i = 0; i < 20; i++) {
        it('Trigger perimeter', () => {

            cy.visit('/signup');

        });
    }
});
