# Sistema de Autenticação JWT e CRUD de Catálogo de Filmes

## Sumário

1. [Visão Geral](#visão-geral)
2. [Ferramentas Utilizadas](#ferramentas-utilizadas)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Documentação com Swagger](#documentação-com-swagger)
6. [Deploy](#deploy)
7. [Experiência com Ferramentas](#experiência-com-ferramentas)

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

- **auth**: Contém os controladores e serviços responsáveis pela autenticação do usuário. Aqui você tem a lógica para lidar com o login e possivelmente outras operações relacionadas à autenticação, como registro, recuperação de senha, etc.

- **movies**: Aqui reside a lógica para manipulação de filmes. Você implementou as operações CRUD (Create, Read, Update, Delete) seguindo os padrões do NestJS. Isso significa que tem controladores para manipular as solicitações HTTP relacionadas aos filmes e serviços para realizar as operações de banco de dados.

- **users**: Similar ao diretório movies, este é dedicado à manipulação de usuários. Você implementou todas as operações CRUD para lidar com dados de usuário.

## Módulos

### Autenticação (Auth)

- **auth.module.ts**: Gerencia tudo relacionado à autenticação.
- **auth.controller.ts**: Controla as solicitações de autenticação dos usuários.
- **auth.service.ts**: Aqui está a lógica real da autenticação.
- **jwt.strategy.ts**: Define como vamos verificar se um usuário está autenticado ou não usando tokens.

### Filmes (Movies)

- **movies.module.ts**: Gerencia tudo relacionado aos filmes.
- **movies.controller.ts**: Controla as solicitações de filmes, como adicionar ou excluir filmes.
- **movies.service.ts**: Aqui está a lógica real dos filmes, como adicionar ou buscar filmes no banco de dados.
- **movie.entity.ts**: Define como os dados de um filme são armazenados.
- **movie.repository.ts**: Interage com o banco de dados para buscar, adicionar ou excluir filmes.

### Usuários (Users)

- **users.module.ts**: Gerencia tudo relacionado aos usuários.
- **users.controller.ts**: Controla as solicitações de usuários, como criar ou excluir usuários.
- **users.service.ts**: Aqui está a lógica real dos usuários, como criar ou autenticar usuários.
- **user.entity.ts**: Define como os dados do usuário são armazenados.
- **user.repository.ts**: Interage com o banco de dados para buscar, adicionar ou excluir usuários.

## Deploy

<p>Deploy é o processo em que um desenvolvedor coloca seu projeto em um servidor ou plataforma de hospedagem na internet. Isso permite que outras pessoas acessem e usem o projeto pela internet. Em outras palavras, é como disponibilizar seu projeto online para que ele esteja disponível para uso público.<p>
<p>Link do Deploy: <a>https://mks-test.up.railway.app/</a></p>

## Documentação-com-Swagger

<p>Swagger é uma ferramenta popular para documentar APIs. Ele permite que os desenvolvedores descrevam, documentem e testem APIs de forma eficiente. Com o Swagger, você pode criar uma documentação interativa para sua API, facilitando para outros desenvolvedores entenderem como usar seus endpoints.</p>
<p>Link do Swagger: <a>https://mks-test.up.railway.app/api#/</a></p>

## Configuração do Ambiente

### Pré-requisitos

- Git
- Node.js
- Docker

### Passos para Configuração

1. Clone o repositório:

   ```bash
   git clone git@github.com:leocarvalhos/mks-test.git
   cd <mks-test>
   ```

2. Crie e configure com as variáveis de ambiente no arquivo `.env` com os dados abaixo:
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
3. Execute o Docker Compose para executar o projeto no seu localhost:

   ```bash
   docker-compose up
   ```

4. Agora o projeto estará disponível na porta 3000
   ```bash
      http://localhost:3000/
   ```

## Experiência com Ferramentas

- TypeScript - 2 anos
- Nest.JS - 2 anos
- TypeORM - 2 anos
- Postgres - 2 anos
- Swagger - Desenvolvi conhecimento para realizar o teste
- Redis - Desenvolvi conhecimento para realizar o teste
- Docker - Desenvolvi conhecimento para realizar o teste
