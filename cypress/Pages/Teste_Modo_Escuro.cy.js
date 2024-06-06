import Page from "../PageObjects/Page";
const page = new Page();

describe("Acessar o site de Transparência e testar recurso de Modo Escuro", () => {
  it("Testar Modo Escuro", () => {
    page.visitarPagina();
    page.acessarModoEscuro();
    page.apertarModoEscuro();
    page.validarModoEscuro();
  });
});
