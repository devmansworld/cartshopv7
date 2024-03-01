class MainPage {
    visitMainPage() {
      cy.visit('https://automationexercise.com');
    }
  
    scrollToSleeve() {
      cy.contains('Sleeve').scrollIntoView();
    }
  
    viewProduct() {
        cy.get('.col-sm-4:contains("Sleeve")').first().within(() => {
          cy.get('.choose a:contains("View Product")').dblclick();
        });
      }
    goToCart(){
        cy.wait(2000);
        cy.contains('a', 'Cart').click();  

    }  

  }
  
  export default new MainPage();
  