class LoginPage {
  loginPageElements = {
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: '#submit',
    errorMessage: '#error'
  }

  //Recuerdan qué tipo de función es esta?
  /*loginPageElements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    submitButton: () => cy.get('#submit')
  }*/

  usernameInput() {
    return cy.get(this.loginPageElements.usernameInput);
  }

  passwordInput() {
    return cy.get(this.loginPageElements.passwordInput);
  }

  submitButton() {
    return cy.get(this.loginPageElements.submitButton);
  }

  errorMessage() {
    return cy.get(this.loginPageElements.errorMessage);
  }

  typeUsername(user){
    return this.usernameInput().type(user);
  }

  typePassword(pasword) {
    return this.passwordInput().type(pasword);
  }

  clickOnSubmitButton() {
    return this.submitButton().click();
  }

  setCredentials(user, password) {
    this.typeUsername(user);
    this.typePassword(password);
    this.clickOnSubmitButton();
  }
}

module.exports = new LoginPage();