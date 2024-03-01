class AccountCreatedPage {
    validateAccountCreated() {
      // Validate the URL contains '/account_created'
      cy.url().should('include', '/account_created');
      cy.wait(2000);
  
      // Validate the presence of 'Congratulations!' text
      cy.contains('Congratulations!').should('exist');
  
      // Subscribe with a random email
      cy.get('#subscribe').click();
      cy.get('#success-subscribe').should('exist');
      cy.get('[data-qa="continue-button"]').click();
  
      // Main page and Cart navigation
    //  cy.url().should('include', '/');
      cy.wait(2000);
    }
  }
  
  export default new AccountCreatedPage();
  