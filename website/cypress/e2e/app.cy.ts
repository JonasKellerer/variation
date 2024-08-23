describe('Navigation', () => {
    it('should navigate to the survey page', () => {
        cy.visit('http://localhost:3000');

        cy.get('a[href*="survey"]').click();

        cy.url().should('include', '/survey');

        cy.get('h1').should('contain', 'Survey');
    });
});
