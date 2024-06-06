import Page from "../PageObjects/Page";
const page = new Page(); 

describe('Acessar a página de gastos com saúde', () => {
  it('Deve acessar a página com sucesso', () => {
    page.visitarPagina();
    page.validarPaginaPrincipal();
  });

  it('Deve clicar no link e acessar a página de gastos com saúde', (status) => {
    page.visitarPagina();
    page.clicarNoLinkSaude();
    page.verificarAcessoSaude(status);
  });
});
