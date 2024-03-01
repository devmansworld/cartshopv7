import faker from 'faker';

class PaymentPage {
    verifyPaymentPage() {
    // Payment and Confirm order
 cy.url().should('include', '/payment');
    }
  
    fillPaymentForm() {
     // Type in credit card information using fake data
cy.get('[data-qa="name-on-card"]').type(faker.name.findName());
cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
const futureExpiryDate = faker.date.future();
const expiryMonth = futureExpiryDate.getMonth() + 1; // Months are zero-based
const expiryYear = futureExpiryDate.getFullYear();

cy.get('[data-qa="expiry-month"]').type(expiryMonth.toString().padStart(2, '0'));
cy.get('[data-qa="expiry-year"]').type(expiryYear.toString());

    }
  
    payAndConfirmOrder() {
// Find and click the "Pay and Confirm Order" button by its text
cy.contains('Pay and Confirm Order').click();

// Assert that the success message is displayed (modify the selector as needed)
//

cy.wait(2000);

    }
  
    // Add other methods related to the Payment Page
  }
  
  export default new PaymentPage();
  