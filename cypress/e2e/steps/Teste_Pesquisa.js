import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Page from "../../PageObjects/Page";
const page = new Page();

Given("que acesso o site", () => {
  cy.visit(url);
});

When("escolher a aba de pesquisa", () => {
  page.procurarAba();
});

And("escrever {string}", (search) => {
  if (search != "") {
    page.escreverDespesa(search);
  }
});

And("Aperto na Lupa", () => {
  page.apertarPesquisa();
});

Then("As informações serão atualizadas na Tela", () => {});
