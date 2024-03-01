class CheckoutPage{
    verifyCheckoutPage() {
        cy.wait(1000);
        cy.url().should('include', '/checkout');
    }
    placeOrder(){
        cy.contains('Place Order').scrollIntoView();
        cy.contains('Place Order').click()
            // cart-view
    }
  
    // Add other methods related to the Cart View Page
  }
  
  export default new CheckoutPage();
  