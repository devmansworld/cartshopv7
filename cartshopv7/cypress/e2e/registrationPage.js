class RegistrationPage {
    seeTheUrl(){
        cy.url().should('include', '/login');
    }
    fillRegistrationForm(firstName, lastName, email) {
      // Assuming it's not in an iframe, you can try waiting for the element to exist
      cy.get('[data-qa="signup-name"]', { timeout: 10000 }).should('exist').type(firstName + ' ' + lastName);
      cy.wait(1000);
      cy.get('[data-qa="signup-email"]').type(email);
      cy.wait(1000);
      cy.contains('button', 'Signup').click();
    }
  }
  
  export default new RegistrationPage();
  
  