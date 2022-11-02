class PimPage {
  addEmployee(option) {
    // click on add button
    cy.get("button").contains(" Add ").click();
    cy.get("div.oxd-loading-spinner").should("not.exist");
    // add employee name
    cy.get("input[name=firstName]").type(option.first_name);
    cy.get("input[name=lastName]").type(option.last_name);
    cy.get("button[type=submit]").contains(" Save ").click({ force: true });
    cy.get("#oxd-toaster_1").within(($successTost) => {
      cy.get("p").contains("Successfully Saved").should("be.visible");
    });
    cy.get("div.oxd-loading-spinner").should("not.exist");
  }

  addEmployeeDetails(option) {
    cy.get("h6").contains("Personal Details").should("be.visible");
    cy.get("label")
      .contains("Driver's License Number")
      .parent()
      .next()
      .children("input")
      .type(option.license_no);
    cy.get("label")
      .contains("License Expiry Date")
      .parent()
      .next()
      .children()
      .find("input[placeholder=yyyy-mm-dd]")
      .type(option.license_expiry, { force: true });
    cy.get("label")
      .contains("License Expiry Date")
      .parent()
      .next()
      .children()
      .find("input")
      .click({ force: true });
    cy.get("label")
      .contains("Nationality")
      .parent()
      .next()
      .find("i")
      .click({ force: true });
    cy.get("div[role = listbox]").should("be.visible");
    cy.get("div[role = option]")
      .contains(option.Nationality)
      .click({ force: true });
    cy.get("label")
      .contains("Nationality")
      .parent()
      .next()
      .find("div.oxd-select-text-input")
      .should("have.text", option.Nationality);
    cy.get('button[type=submit]').contains(' Save ').click();
    cy.get("#oxd-toaster_1").within(($successTost) => {
      cy.get("p").contains("Successfully Updated").should("be.visible");
    });
  }
}
export default PimPage;
