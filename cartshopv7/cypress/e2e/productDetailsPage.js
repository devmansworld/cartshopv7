class ProductDetailsPage {
    verifyProductDetailsPage() {
        cy.url().should('include', '/product_details/');
        cy.wait(2000);
    
    }
  
    addToCart() {
        cy.get('.col-sm-7').within(() => {
            cy.get('input#quantity').clear().type('30');
            cy.contains('Add to cart').click();
            cy.wait(1000);
     
          });
          cy.contains('Your product has been added to cart');


          cy.get('#cartModal').find('.modal-body').should('contain.text', 'View Cart');
          cy.get('#cartModal').contains('View Cart').click();
    }
  
    // Add other methods related to the Product Details Page
  }
  
  export default new ProductDetailsPage();
  