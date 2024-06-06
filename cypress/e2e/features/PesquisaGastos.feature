#language: pt

Funcionalidade: Acessar o site de Transparência e testar Pesquisa Quanto foi gasto com:
    Descrição: Aqui testamos a pesquisa central do site no mês

Contexto: 
    Dado que acesso o site "https://transparencia.pb.gov.br/"


Cenário: Testar Pesquisa Quanto foi gasto com:
    Quando Ir até o bloco Quanto foi gasto com:
    E Selecionar Cultura
    E Selecionar ano 2020
    E Apertar em Pesquise
    Então As informações apareceram em uma nova url

