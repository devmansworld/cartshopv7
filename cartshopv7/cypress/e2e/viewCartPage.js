class ViewCartPage {
    
    proceedToCheckout() {
        // Scroll to find the "Place Order" button

        cy.url().should('include', '/view_cart');
        cy.contains('Proceed To Checkout').scrollIntoView().should('be.visible', { timeout: 10000, retryInterval: 1000 });
      
        // Click on "Place Order" button
        cy.contains('Proceed To Checkout').click();

      }

    jumpToRegister(){
        // Wait for 2 seconds (2000 milliseconds)
        cy.wait(2000);

    // Find the link with the text 'This text' and click it
        cy.contains('a', 'Register / Login').click();

    }

    }
  
    // Add other methods related to the Checkout Pag
  
  export default new ViewCartPage();
  