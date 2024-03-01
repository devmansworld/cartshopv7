import faker from 'faker';
import mainPage from './mainPage';
import productDetailsPage from './productDetailsPage';
import cartViewPage from './checkoutPage';
import viewCartPage from './viewCartPage';
import paymentPage from './paymentPage';
import orderPlacedPage from './orderPlacedPage';
import registrationPage from './registrationPage';
import signupPage from './signupPage'; 
import accountCreatedPage from './accountCreatedPage';
import checkoutPage from './checkoutPage';


const validStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
describe('Main Test Suite', () => {
  it('test with product actions, subscription, checkout, payment, and confirm order', () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password(); // Generate a random password
    const randomAddress = faker.address.streetAddress(); // Generate a random address
    const randomState = faker.random.arrayElement(validStates);
    const randomCity = faker.address.city(); // Generate a random city
    const randomZipcode = faker.address.zipCode(); // Generate a random zipcode
    const randomMobileNumber = faker.phone.phoneNumber(); // Generate a random phone number
 
    // 1 . Main page actions
    mainPage.visitMainPage();
    mainPage.viewProduct();

    // 2. Product Details page actions
    productDetailsPage.addToCart();

    // Cart View page actions
  viewCartPage.proceedToCheckout();
  viewCartPage.jumpToRegister();

        // Registration
  registrationPage.fillRegistrationForm(randomFirstName, randomLastName, randomEmail);
  signupPage.fillSignupForm(randomFirstName, randomLastName, randomEmail, randomPassword, randomAddress, randomState, randomCity, randomZipcode, randomMobileNumber);

  accountCreatedPage.validateAccountCreated();
  mainPage.goToCart();
  viewCartPage.proceedToCheckout();
  checkoutPage.verifyCheckoutPage();
  checkoutPage.placeOrder();
    // Checkout page actions
 

    // Payment page actions
   paymentPage.fillPaymentForm();
   paymentPage.fillPaymentForm();
  paymentPage.payAndConfirmOrder();

    // Order Placed page actions
    orderPlacedPage.verifyOrderPlacedPage();
    orderPlacedPage.downloadInvoice();
     orderPlacedPage.continueShopping();
  });
});
