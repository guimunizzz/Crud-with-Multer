# 📦 Gerenciador de Produtos & Categorias (Backend)

Sistema desenvolvido em **Node.js** focado na gestão de estoque e transferência de arquivos (upload de imagens). O projeto utiliza o middleware **Multer** para o tratamento de arquivos estáticos e segue as melhores práticas de **Clean Code** e arquitetura REST.

## 🚀 Funcionalidades Principais

* **Gestão de Arquivos (Multer):** Realiza o recebimento de imagens via cliente e o armazenamento local no servidor.
* **Vínculo Relacional:** Cada produto é obrigatoriamente vinculado a uma categoria (1:N).
* **Persistência de Dados:** Armazenamento do nome do arquivo no MySQL para referência futura.
* **CRUD Completo:** Endpoints padronizados para Cadastro, Leitura, Edição e Exclusão.

## 🛠️ Tecnologias e Dependências

* **Runtime:** Node.js
* **Framework:** Express
* **Upload de Arquivos:** [Multer](https://github.com/expressjs/multer)
* **Banco de Dados:** MySQL (via `mysql2` ou `knex`)
* **Padronização:** Clean Code e Arquitetura de Pastas (MVC ou similar)

## 📁 Estrutura de Pastas (Clean Code)

```text
src/
 ├── config/         # Configurações do Multer e Banco de Dados
 ├── controllers/    # Lógica de negócio e tratamento de requisições
 ├── routes/         # Definição das rotas padronizadas
 ├── uploads/        # Pasta física onde as imagens são armazenadas (GitIgnored)
 └── server.js       # Ponto de entrada da aplicação

```

## 🗄️ Modelo de Dados

### Tabela `produtos`

* `idProduto` (PK), `idCategoria` (FK), `nomeProduto`, `valorProduto`, `vinculoImagem` (String/Varchar), `dataCad`.

### Tabela `categoria`

* `idCategoria` (PK), `descricaoCategoria`, `dataCad`.

---

## 🛣️ API Endpoints (Padrão REST)

| Método | Rota | Descrição |
| --- | --- | --- |
| **POST** | `/produtos` | Cadastro de produto + **Upload de Imagem** |
| **GET** | `/produtos` | Lista todos os produtos |
| **GET** | `/produtos/:id` | Detalhes de um produto específico |
| **PUT** | `/produtos/:id` | Atualiza dados do produto |
| **DELETE** | `/produtos/:id` | Remove produto (e referência da imagem) |

---

## ⚙️ Como rodar o projeto

1. **Clone o projeto e instale as dependências:**
```bash
npm install

```


2. **Configuração do Ambiente:**
* Crie um arquivo `.env` com suas credenciais do MySQL.
* Certifique-se de que a pasta `uploads/` existe na raiz do projeto.


3. **Execução:**
```bash
npm run dev

```



## 🧪 Testando o Upload (Dica Importante)

Para validar a entrega através do **Postman** ou **Insomnia**:

1. Utilize o corpo da requisição como `Multipart Form`.
2. No campo `vinculoImagem`, altere o tipo para **File**.
3. Envie os demais campos (nome, valor, idCategoria) como campos de texto comuns.

---

> **Nota de Boas Práticas:** O arquivo `.gitignore` está configurado para não subir a pasta `node_modules` e os arquivos de imagem dentro de `uploads/`, mantendo o repositório leve e profissional.

Você quer que eu escreva o código da configuração do **Multer (storage)** para garantir que os nomes das imagens sejam únicos (usando data ou hash)?