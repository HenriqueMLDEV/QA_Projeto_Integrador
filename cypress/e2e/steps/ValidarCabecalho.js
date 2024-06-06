import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Page from '../../PageObjects/Page';
const page = new Page(); 


Given('que acesso o site {string}', (url) => {
  cy.visit(url);
});

When('valido a página', () => {
  page.validarPaginaPrincipal()
});

When('verifico a visibilidade do cabeçalho', () => {
  page.validarCabecalho()
});

Then('exibe {string}', (status) => {
  page.validarStatusCabecalho(status)
});
