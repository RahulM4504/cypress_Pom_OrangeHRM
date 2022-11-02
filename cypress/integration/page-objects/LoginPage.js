class LoginPage {
  dologin(option) {
    cy.get("input[name=username]").clear().type(option.username);
    cy.get("input[name=password]").clear().type(option.password);
    cy.get("button").contains(" Login ").click();
    cy.get("p.oxd-userdropdown-name").should("be.visible");
    return this;
  }
}
export default LoginPage;
