/// <reference types="cypress" />

import LoginPage from "../page-objects/LoginPage";
import loginData from "../spec/orange-hrm-login.test.data";
import PimPage from "../page-objects/PimPage";
import testdata from "../spec/orange-hrm-add-edit-employee.test.data";

describe("Add employee details", () => {
  const loginPage = new LoginPage();
  const pimPage = new PimPage();

  beforeEach("BeforeEach hook", () => {
    cy.visit("/web/index.php/auth/login");
    loginPage.dologin(loginData);
  });

  it("Verify if user is able to add employee details", () => {
    pimPage.addEmployee(testdata);
    pimPage.addEmployeeDetails(testdata);
  });
});
