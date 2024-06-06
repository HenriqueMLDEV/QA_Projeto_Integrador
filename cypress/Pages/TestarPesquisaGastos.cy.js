import Page from "../PageObjects/Page";
const page = new Page();

describe("Acessar o site de Transparência e testar Pesquisa Quanto foi gasto com:", () => {
  it("Testar Pesquisa Quanto foi gasto com:", () => {
    page.visitarPagina();
    page.selecionarCultura();
    page.selecionarAno();
    page.apertarBotaoPesquisa();
    page.validarPaginaDespesa();
  });
});
