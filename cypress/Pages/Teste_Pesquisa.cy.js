import Page from "../PageObjects/Page";
const page = new Page();

describe("Acessar o site de Transparência e fazer uma busca de Despesa Orçamentaria", () => {
  it("Fazer Busca de Despesa Orçamentaria", () => {
    page.visitarPagina();
    page.procurarAba();
    page.escreverDespesa();
    page.apertarPesquisa();
  });
});
