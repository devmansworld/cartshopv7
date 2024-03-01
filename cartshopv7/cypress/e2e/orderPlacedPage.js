class OrderPlacedPage {
    verifyOrderPlacedPage() {
   
cy.url().should('include', 'payment_done');
    }
  
    downloadInvoice() {
cy.contains('Download Invoice').click();
cy.wait(2000);
    }
  
continueShopping() {
    // Find and click the "Continue" button by its text
cy.contains('Continue').click();
cy.wait(2000);
    }
  
    // Add other methods related to the Order Placed Page
  }
  
  export default new OrderPlacedPage();
  