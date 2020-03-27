const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
*Rota / Recurso
*/

/**
*Métodos HTTP:
*GET: Buscar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parametros
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginação) --request.query - app.get('/users', (request, response)=>{
 * Route Params: Parametros utilizados para identificar recuros (/:id)--request.params - pp.get('/users/:id', (request, response)=>{
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL (MariaDB), SQLite, PostgreeSQL, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB,etc
  * 
  * Installation: npm install knex
  *               npm install sqlite3
  * 
  * after: execute npx knex init
  * NOTE: npx execute a package
  * 
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()--KNEX.JS
  */

app.listen(3333);