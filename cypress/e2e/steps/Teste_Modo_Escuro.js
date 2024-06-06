import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Page from "../../PageObjects/Page";
const page = new Page();

Given("que acesso o site", () => {
  page.visitarPagina();
});

When("Ir até o icone do Modo Escuro", () => {
  page.acessarModoEscuro();
});

And("Apertar", () => {
  page.apertarModoEscuro();
});

Then("O site ficará em Modo Escuro", () => {
  page.validarModoEscuro();
});
