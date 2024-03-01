import faker from 'faker';

class SignupPage {
  fillSignupForm(firstName, lastName, address, state, city, zipcode, mobileNumber) {
    // Function to generate a random date within a given range
    function getRandomDate(minYear, maxYear) {
      const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
      const month = Math.floor(Math.random() * 12) + 1; // Months are 1-12
      const daysInMonth = new Date(year, month, 0).getDate();
      const day = Math.floor(Math.random() * daysInMonth) + 1; // Days are 1 to the last day of the month
      return { year, month, day };
    }

    // Example usage
    const minYear = 1980;
    const maxYear = 2000;
    const randomDate = getRandomDate(minYear, maxYear);

    const randomPassword = faker.internet.password(); // Generate a random password

  
    cy.get('[data-qa="days"]').select(randomDate.day.toString());
    cy.get('[data-qa="months"]').select(randomDate.month.toString());
    cy.get('[data-qa="years"]').select(randomDate.year.toString());

    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type('Example Company');
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="address2"]').type('Apt 45');
    cy.get('[data-qa="country"]').select('United States');
    cy.wait(2000);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);
    cy.get('[data-qa="password"]').type(randomPassword); // Type the generated password
    cy.get('[data-qa="create-account"]').click();
    cy.wait(5000);
    cy.get('[data-qa="account-created"]').should('exist');
  }
}

export default new SignupPage();
