
//importando o modolo express no node
const express = require('express');
const cors = require('cors')
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);



//acessa a porta 3333
app.listen(3333);



/**
 * Método HTTTP:
 * 
 * GET: Buscar uma informação
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Deleter uma informação
 * Tudo isso no back-end
 */


 /**
  * Tipos de paramentros
  * 
  * Query Params: Parâmentro nomeados enviados na rota após o "?" (Filtros,paginação)
  * Route Params: Parâmetros utilizados para idnentificar recursos
  * Request Body: Corpa da requisição, utilizado para criar ou alterar a requisição.
  */
