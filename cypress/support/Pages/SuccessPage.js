class SuccessPage {
  succesPageElements = {
    successTitle: '.post-title',
    successSubTitle: '.post-content p strong',
    logOutButton: '.wp-block-group a'
  }

  successTitle() {
    return cy.get(this.succesPageElements.successTitle);
  }

  successSubTitle() {
    return cy.get(this.succesPageElements.successSubTitle);
  }

  logOutButton() {
    return cy.get(this.succesPageElements.logOutButton);
  }
}

module.exports = new SuccessPage();