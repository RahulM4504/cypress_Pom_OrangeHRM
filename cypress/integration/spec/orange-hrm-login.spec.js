/// <reference types="cypress" />

import LoginPage from "../page-objects/LoginPage";
import testdata from "../spec/orange-hrm-login.test.data"

describe("Login Test", () => {
  const loginPage = new LoginPage();

  beforeEach("Before hook", () => {
    cy.visit(
      "/web/index.php/auth/login"
    );
  });

  it("Verify if user is able to login successfully", () => {
    loginPage.dologin(testdata);
  });
});
