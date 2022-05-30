#API Rest - NodeJs

### [NodeJs](https://nodejs.org/) - [Express](https://expressjs.com/) - [Sequelize](https://sequelize.org/) - [SQLite](https://www.sqlite.org/)

### Rotas

#####  URL-API = /api/products
- ######  + " / " = GET: Listar todos os produtos
- ######  +  " / " = POST: Criar um novo produto
- ######  +  " /:id " = PUT: Atualizar um produto
- ######  +  " /:id " = DELETE: Deletar um produto
- ######  +  " /:id " = GET: Buscar um produto por ID


!!! info "Listar todos os produtos"  "GET"  "http://localhost:3000/api/products" "application/json"


!!! info "Criar um novo produto"  "POST"  "http://localhost:3000/api/products" "application/json"

```
{
  "name": "Produto 1",
  "description": "Descrição do produto 1",
  "price": 100.00,
  "category": "Categoria 1"
}
```

!!! info "Atualizar um produto"  "PUT"  "http://localhost:3000/api/products/:id" "application/json"
```
{
  "name": "Produto atualidadado",
  "description": "Descrição do produto 1",
  "price": 100.00,
  "category": "Categoria 1"
}
```

!!! info "Deletar um produto"  "DELETE"  "http://localhost:3000/api/products/:id" "application/json"

!!! info "Buscar um produto por ID"  "GET"  "http://localhost:3000/api/products/:id" "application/json"
