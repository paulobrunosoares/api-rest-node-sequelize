# API Rest - NodeJs

### [NodeJs](https://nodejs.org/) - [Express](https://expressjs.com/) - [Sequelize](https://sequelize.org/) - [SQLite](https://www.sqlite.org/)

### Rotas

#####  URL-API = /api/products
  -  ######  " / " = GET: Listar todos os produtos
      +  ##### "Listar todos os produtos"  "GET"  "http://localhost:3000/api/products" "application/json"
  - ######  " / " = POST: Criar um novo produto
    - ##### "Criar um novo produto"  "POST"  "http://localhost:3000/api/products" "application/json"
      ```
      {
        "id": 1,
        "name": "Produto 1",
        "description": "Descrição do produto 1",
        "price": 100.00,
        "category": "Categoria 1"
      }
      ```

  - ###### " /:id " = PUT: Atualizar um produto
    - ##### "Atualizar um produto"  "PUT"  "http://localhost:3000/api/products/:id" "application/json"
      ```
      {
        "id": 1,
        "name": "Produto atualidadado",
        "description": "Descrição do produto 1",
        "price": 100.00,
        "category": "Categoria 1"
      }
      ```
  - ###### " /:id " = DELETE: Deletar um produto
    - ##### "Deletar um produto"  "DELETE"  "http://localhost:3000/api/products/:id" "application/json"
  - ###### " /:id " = GET: Buscar um produto por ID
    - ##### "Buscar um produto por ID"  "GET"  "http://localhost:3000/api/products/:id" "application/json"

