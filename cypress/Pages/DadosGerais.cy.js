import Page from "../PageObjects/Page";
const page = new Page();

describe('Acessar o link "Dados Gerais"', () => {
  it("Deve acessar a página com sucesso", () => {
    page.visitarPagina();
    page.validarPaginaPrincipal();
  });

  it('Deve clicar no link "Dados Gerais" e validar sua existência', (status) => {
    page.visitarPagina();
    page.ClicarLinkDadosGerais();
    page.validarAcessoDadosGerais(status);
  });
});
