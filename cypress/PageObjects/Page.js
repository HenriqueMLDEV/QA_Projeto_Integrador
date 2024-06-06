class Page {
  apertarBotaoPesquisa() {
    return cy
      .get("#search-despesa")
      .find("span")
      .should("contain", "Pesquise")
      .wait(1000)
      .click();
  }
  selecionarAno() {
    return cy.get("#ano-despesa").select("ano=2020");
  }

  selecionarCultura() {
    return cy
      .get("#tipo-despesa")
      .select(
        "https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=CULTURA"
      );
  }

  validarModoEscuro() {
    return cy
      .get("#main-header")
      .should("have.css", "background-color", "rgb(0, 0, 0)");
  }

  acessarModoEscuro() {
    return cy.get("#siteaction-contraste");
  }

  apertarModoEscuro() {
    return cy.get("#siteaction-contraste").click();
  }

  apertarPesquisa() {
    return cy.get(".tile-search-site-bt-submit").click();
  }
  procurarAba() {
    return cy.get(".tile-search-site-form--searchField");
  }

  escreverDespesa() {
    return cy
      .get(".tile-search-site-form--searchField")
      .type("Despesa Orçamentaria");
  }
  visitarPagina() {
    return cy.visit("https://transparencia.pb.gov.br");
  }

  validarPaginaPrincipal() {
    return cy.get("#logo-site").should("exist");
  }

  ClicarLinkDadosGerais() {
    return cy
      .get('a[href="https://transparencia.pb.gov.br/dados-gerais/"]')
      .click();
  }

  clicarNoLinkSaude() {
    return cy
      .get(
        'a.external-link[href="https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE"]'
      )
      .click();
  }

  validarCabecalho() {
    return cy.get("header").should("be.visible");
  }

  validarStatusCabecalho(status) {
    if (status === "existe") {
      cy.get("header").should("be.visible");
    } else if (status === "não existe") {
      cy.get("header").should("not.exist");
    }
  }

  validarAcessoDadosGerais(status) {
    if (status === "validado") {
      cy.get('meta[property="og:title"][content="Dados Gerais"]').should(
        "exist"
      );
    } else if (status === "não existe") {
      cy.get('meta[property="og:title"][content="Dados Gerais"]').should(
        "no-exist"
      );
    }
  }

  verificarAcessoSaude(status) {
    if (status === "com sucesso") {
      return cy
        .url()
        .should(
          "include",
          "https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE"
        );
    } else if (status === "com falhas") {
      return cy
        .url()
        .should(
          "not.include",
          "https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE"
        );
    }
  }
}

export default Page;
