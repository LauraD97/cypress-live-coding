import LoginPage from "../support/Pages/LoginPage";
import SuccessPage from "../support/Pages/SuccessPage";

describe('Login feature', () => {
  beforeEach(() => {
    cy.visit('/practice-test-login/');
    cy.fixture('credentials').as('credentials');
  });

  it('Positive LogIn test', () => {
    cy.get('@credentials').then(credentials => {
      LoginPage.setCredentials(credentials.positive.username, credentials.positive.password);
      
      cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')
      SuccessPage.successTitle().should('contain.text', 'Logged In');
      SuccessPage.successSubTitle().should('contain.text', 'Congratulations');
      SuccessPage.logOutButton().should('exist');
    });

    /*LoginPage.typeUsername('student');
    LoginPage.typePassword('Password123');
    LoginPage.clickOnSubmitButton();

    cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')
    SuccessPage.successTitle().should('contain.text', 'Logged In');
    SuccessPage.successSubTitle().should('contain.text', 'Congratulations');
    SuccessPage.logOutButton().should('exist');*/
  });

  it('Negative username test', () => {
    cy.get('@credentials').then(credentials => {
      LoginPage.setCredentials(credentials.negativeUser.username, credentials.negativeUser.password);

      LoginPage.errorMessage().should('exist');
      LoginPage.errorMessage().should('have.text', credentials.negativeUser.message);
    });

    /*LoginPage.typeUsername('incorrectUser');
    LoginPage.typePassword('Password123');
    LoginPage.clickOnSubmitButton();

    LoginPage.errorMessage().should('exist');
    LoginPage.errorMessage().should('have.text', 'Your username is invalid!');*/
  });

  it('Negative password test', () => {
    cy.get("@credentials").then(credentials => {
      LoginPage.setCredentials(credentials.negativePass.username, credentials.negativePass.password);

      LoginPage.errorMessage().should('exist');
      LoginPage.errorMessage().should('have.text', credentials.negativePass.message);
    });

    /*LoginPage.typeUsername('student');
    LoginPage.typePassword('incorrectPassword');
    LoginPage.clickOnSubmitButton();

    LoginPage.errorMessage().should('exist');
    LoginPage.errorMessage().should('have.text', 'Your password is invalid!');*/
  });
});