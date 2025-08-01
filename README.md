# Let Me Ask

**Let Me Ask** é uma plataforma de perguntas e respostas em tempo real, desenvolvida com foco em aprendizado prático durante a NLW Agents da [Rocketseat](https://rocketseat.com.br). O projeto é dividido em duas aplicações: **front-end (React)** e **back-end (Node.js + Fastify)**.

---

## 🧰 Tecnologias Utilizadas

### Front-end
- **React** + **TypeScript**
- **React Router DOM**
- **React Query**
- **Tailwind CSS**
- **tw-animate-css**

### Back-end
- **Node.js** + **TypeScript**
- **Fastify**
- **Zod**
- **Drizzle ORM** + **drizzle-seed**
- **PostgreSQL** + **pgvector**
- **@fastify/cors**

---

## 🏗️ Arquitetura e Padrões

### Front-end
- Componentização com funções e export default
- Consumo de dados via **React Query**
- Estilização com **Tailwind CSS** e variáveis CSS customizadas

### Back-end
- Organização por domínio: separação clara entre rotas, schemas, seeds e lógica de banco
- **Barrel file** para reexportação de schemas
- Validação de ambiente com **Zod**

---

## ⚙️ Setup do Projeto

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd letmeask
```

---

### 2. Configuração do Back-end

```bash
cd server
npm install
```

- Copie o arquivo `.env.example` e renomeie para `.env`
- Configure as variáveis conforme necessário

```bash
docker compose up -d          # Sobe o PostgreSQL
npm run dev                   # Inicia o servidor (porta padrão: http://localhost:3333)
```

---

### 3. Configuração do Front-end

```bash
cd web
npm install
npm run dev                   # Inicia o app (porta padrão: http://localhost:5173)
```

> Certifique-se de que a API está acessível em `http://localhost:3333`.

---

Projeto desenvolvido com 💜 por **Nikely Fedechen Martins** durante a **NLW Agents** da [Rocketseat](https://rocketseat.com.br).