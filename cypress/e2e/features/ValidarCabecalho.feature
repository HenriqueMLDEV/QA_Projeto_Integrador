#language: pt

Funcionalidade: Validar botões do cabeçalho
    Descrição: aqui testamos se o cabeçalho está com visivel

Contexto:
        Dado que acesso o site "https://transparencia.pb.gov.br/"

Cenário: Validação de botões
    Quando valido a página
    E verifico a visibilidade do cabeçalho
    Então exibe "existe"



