#language: pt

Funcionalidade: Acessar link de dados gerais
  Descrição: Testaremos o caminho até acessar o link de dados gerais

  Contexto:
    Dado que eu acesso a página "https://transparencia.pb.gov.br/"

  Cenário: link validado
    Quando valido a página
    E clico no link "dados gerais"
    Então link "validado"

  Esquema do Cenário: link não existe
    Quando valido a página
    E clico no link "dados gerais"
    Então link "não existe"

#Esquema do Cenário: Esquema do Cenário:  ->
#Cenário: Link não existe
