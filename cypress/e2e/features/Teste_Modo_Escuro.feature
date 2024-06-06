#language: pt

Funcionalidade: Acessar o site de Transparência e testar recurso de Modo Escuro
    Descrição: Aqui testamos o recurso de modo escuro do site

Contexto: 
    Dado que acesso o site "https://transparencia.pb.gov.br/"

Cenário: Testar Modo Escuro
    Quando Ir até o icone do Modo Escuro
    E Apertar 
    Então O site ficará em Modo Escuro

