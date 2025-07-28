Esse projeto foi feito com o intuito de estudo pessoal, contém aplicações simples onde em um cenário real seriam refatoradas para uma melhor aplicação

## Conceito do projeto

Estudar a aplicação real de autorização utilizando JWT

Aplicar conceitos de clean arch para uma melhor organização de código

## Arquitetura

O projeto foi separado em Application e Server

Application:

Controllers: Lógica das rotas
Interfaces: Tipagens
errors: erros personalizados
lib: configurações de libs externas
middleware: Middlewares para validação e autenticação
useCases: Lógicas da regra de negócio
utils: funções para ajudar no desenvolvimento em geral

Server:

adapter: Funções para adaptar controllers e middlewares às rotas do Express
index: index: Arquivo principal para inicialização do servidor e definição das rotas
