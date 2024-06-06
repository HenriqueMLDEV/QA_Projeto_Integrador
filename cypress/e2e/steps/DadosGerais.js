import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Page from '../../PageObjects/Page';
const page = new Page(); 

Given('que eu acesso a página {string}', (url) => {
  cy.visit(url);
});

When('valido a página', () => {
  page.validarPaginaPrincipal()
});

When('clico no link {string}', () => {
  page.ClicarLinkDadosGerais();
});

Then('link {string}', (status) => {
  page.validarAcessoDadosGerais(status);
});
