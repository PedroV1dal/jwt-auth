# JWT Authentication - Projeto de Estudo

Este projeto foi desenvolvido para fins de estudo pessoal. Ele contém implementações simples que, em um cenário real, seriam refatoradas para uma aplicação mais robusta.

---

## Conceito do Projeto

- Estudar a aplicação real de autorização utilizando **JWT**
- Aplicar conceitos de **Clean Architecture** para uma melhor organização do código

---

## Arquitetura

O projeto está dividido em dois principais módulos: **Application** e **Server**.

### Application

- **Controllers:** Lógica das rotas
- **Interfaces:** Tipagens
- **errors:** Erros personalizados
- **lib:** Configurações de libs externas
- **middleware:** Middlewares para validação e autenticação
- **useCases:** Lógicas da regra de negócio
- **utils:** Funções auxiliares para o desenvolvimento

### Server

- **adapter:** Funções para adaptar controllers e middlewares às rotas do Express
- **index:** Arquivo principal para inicialização do servidor e definição das rotas

---

## Como rodar

```bash
# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

---

## Referências

- [Documentação JWT](https://jwt.io/introduction)
- [Clean Architecture](https://github.com/eduardomoroni/clean-architecture-examples)

---
