/// <reference types="cypress"/>
import {signup} from "../fixtures/selectors.js";


describe("Testing signup", function () {
beforeEach(function () {
cy.visit('https://www.konga.com')

});
it("Signup - I Should be able to sign up my account with valid details", function () {

  cy.get(signup.signup).click()
  cy.get(signup.Dont_have_an_account_button).click()
  cy.get(signup.firstname_field).click()
  cy.get(signup.firstname_field).type('Olatunji')
  cy.get(signup.lastname_field).click()
  cy.get(signup.lastname_field).type('Ridwan')
  cy.get(signup.emailaddress_field).click()
  cy.get(signup.emailaddress_field).type('makegubuffo-4347@yopmail.com')
  cy.get(signup.phone_number_field).click()
  cy.get(signup.phone_number_field).type('08035486277')
  cy.get(signup.password_field).click()
  cy.get(signup.password_field).type('Iamerror@404')
  cy.get(signup.create_account_button).click()





  /*cy.get(signup.email_field).click()
  cy.get(signup.email_field).type('tunjiy95@gmail.com')
  cy.get(signup.password).click()
  cy.get(signup.password).type('Iamerror@404')
  cy.get(signup.login_button).click()*/

})
})
