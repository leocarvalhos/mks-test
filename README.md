# Sistema de Autenticação JWT e CRUD de Catálogo de Filmes

## Sumário

1. [Visão Geral](#visão-geral)
2. [Ferramentas Utilizadas](#ferramentas-utilizadas)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Endpoints da API](#endpoints-da-api)
6. [Autenticação e Autorização](#autenticação-e-autorização)
7. [Cache com Redis](#cache-com-redis)
8. [Testes](#testes)
9. [Documentação com Swagger](#documentação-com-swagger)
10. [Deploy](#deploy)
11. [Experiência com Ferramentas](#experiência-com-ferramentas)

## Visão Geral

Este projeto é um teste back-end para a empresa MKS e consiste no desenvolvimento de um sistema de autenticação JWT juntamente com uma API CRUD para um catálogo de filmes. Todos os endpoints desta API são protegidos e requerem autenticação. A aplicação foi desenvolvida utilizando TypeScript, Nest.js, TypeORM, Swagger, Docker, Redis e PostgreSQL.

## Ferramentas Utilizadas

- **TypeScript**: Linguagem de programação utilizada para desenvolvimento do projeto.
- **Nest.js**: Framework para construção de aplicações Node.js eficientes, confiáveis e escaláveis.
- **TypeORM**: ORM utilizado para interagir com o banco de dados PostgreSQL.
- **Swagger**: Ferramenta para documentação e teste dos endpoints da API.
- **Docker**: Utilizado para containerização da aplicação.
- **Redis**: Utilizado como cache para otimização de performance.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados.

## Arquitetura do Sistema

A arquitetura do sistema é composta por uma aplicação back-end que provê uma API RESTful em JSON. Os principais componentes são:

- **Autenticação JWT**: Sistema de autenticação baseado em JSON Web Tokens.
- **CRUD de Usuários**: Endpoints para criação, leitura, atualização e exclusão de filmes.
- **CRUD de Filmes**: Endpoints para criação, leitura, atualização e exclusão de filmes.
- **Cache com Redis**: Implementação de cache para melhorar a performance nas requisições de leitura.

## Deploy

<p>Deploy: <a>https://mks-test.up.railway.app/</a></p>

## #Documentação-com-Swagger

<p>Swagger: <a>https://mks-test.up.railway.app/api#/</a></p>

## Configuração do Ambiente

### Pré-requisitos

- Git
- Node.js
- Docker
- Docker Compose

### Passos para Configuração

1. Clone o repositório:

   ```bash
   git clone git@github.com:leocarvalhos/mks-test.git
   cd <mks-test>
   ```

2. Configure as variáveis de ambiente no arquivo `.env`:
   ```bash
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=postgres
   JWT_PASS=XASZDSAFXCASDSAsadas233412312s@@112
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```
3. Execute o Docker Compose para subir os containers do PostgreSQL e Redis:

   ```bash
   docker-compose up -d
   ```

4. Instale as dependências do projeto:
   ```bash
   yarn add
   ```
5. Execute as migrações do TypeORM:
   ```bash
   yarn add typeorm migration:run
   ```
6. Inicie a aplicação:
   ```bash
   yarn run start:dev
   ```
