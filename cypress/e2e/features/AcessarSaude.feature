#language: pt

Funcionalidade: Acessar gastos com saúde
  Descrição: Testaremos o caminho até acessar os gastos com saúde na página

  Contexto:
    Dado que eu acesso a página "https://transparencia.pb.gov.br/"

  Cenário: Acesso com sucesso
    Quando valido a página
    E clico no link
    Então acesso "com sucesso"

  Esquema do Cenário: Acesso link com erro
    Quando valido a página
    Quando clico no link 
    Então acesso "com falhas"

#Esquema do Cenário: Link errado -> 
#Cenário: Acesso com falhas
