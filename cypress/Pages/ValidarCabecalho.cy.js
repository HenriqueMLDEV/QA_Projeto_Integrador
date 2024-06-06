import Page from "../PageObjects/Page";
const page = new Page(); 

describe('Validar visibilidade do cabeçalho', () => {
    it('Deve acessar o site com sucesso', () => {
      page.visitarPagina();
      page.validarPaginaPrincipal();
    });
  
    it('Deve verificar a visibilidade do cabeçalho', () => {
      page.validarCabecalho();
    });
  
    it('Deve verificar a não visibilidade do cabeçalho', (status) => {
        page.validarStatusCabecalho(status)
      });
  });
  