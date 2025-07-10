# Let Me Ask

Uma plataforma de perguntas e respostas em tempo real.

## 🛠️ Tecnologias e Bibliotecas

- **Node.js** + **TypeScript**
- **Fastify**: Framework web para Node.js
- **Zod**: Validação de esquemas e tipos
- **Drizzle ORM**: ORM para PostgreSQL
- **drizzle-seed**: Seed de banco de dados
- **PostgreSQL**: Banco de dados relacional
- **pgvector**: Extensão para vetores no PostgreSQL
- **@fastify/cors**: Middleware CORS para Fastify

## 🏗️ Padrões de Projeto

- **Barrel File**: Reexportação de módulos em [`src/db/schema/index.ts`](src/db/schema/index.ts)
- **Organização por domínio**: Separação de rotas, schema, seed e conexão do banco em pastas específicas
- **Validação de ambiente**: Utilização de [`zod`](https://github.com/colinhacks/zod) para validação das variáveis de ambiente em [`src/env.ts`](src/env.ts)

## ⚙️ Setup e Configuração

1. **Clone o repositório e instale as dependências:**
   ```sh
   npm install
    ```
2. Configure o arquivo ```.env```:

    - Copie o arquivo ```.env.example``` para ```.env``` e ajuste as variáveis conforme necessário.

3. Suba o banco de dados com Docker:
    ```bash
    docker compose up -d
    ```

4. Rode as migrations e o seed:
    ```bash
    npm run db:seed
    ```

5. Inicie o servidor em modo desenvolvimento:
    ```bash
    npm run dev
    ```
## 📚 Endpoints
- ```GET /health``` — Health check
- ```GET /rooms``` — Lista de salas
---
Desenvolvido com 💜 por Nikely Fedechen Martins durante a NLW Agents da [Rocketseat](https://rocketseat.com.br).