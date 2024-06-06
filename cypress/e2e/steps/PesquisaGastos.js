import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Page from "../../PageObjects/Page";
const page = new Page();

Given("que acesso o site", () => {
  page.visitarPagina();
});

When("Ir até o bloco Quanto foi gasto com:", () => {});

And("Selecionar Cultura", () => {
  page.selecionarCultura();
});

And("Selecionar ano 2020", () => {
  page.selecionarAno();
});

And("Apertar em Pesquise", () => {
  page.apertarBotaoPesquisa();
});

Then("As informações apareceram em uma nova url", () => {});
