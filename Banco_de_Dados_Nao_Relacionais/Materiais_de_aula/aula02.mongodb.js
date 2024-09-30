/* Tipos de Dados simples
* string, number, boolean, date, ObjectId
* Tipos de Dados complexos
* Array, Object, Geo, Binary
*/
// Comentário que introduz os tipos de dados simples (string, number, boolean, date, ObjectId) e complexos (Array, Object, Geo, Binary).

use('aula02')
// Define o banco de dados "aula02" para ser utilizado nas operações subsequentes.

db.receitas.insertOne({
    _id: "123", // Campo "_id" é a chave primária que identifica o documento de forma única na coleção. Neste caso, foi manualmente definido como "123".
    nome: "Hambúrguer de Costela", // Campo "nome" define o nome da receita como "Hambúrguer de Costela".
    preco: 15.99, // Campo "preco" é do tipo numérico e armazena o preço da receita (15.99).
    ingredientes: ["pão", "costela", "queijo"], // Campo "ingredientes" é um array que armazena os ingredientes da receita. Aqui temos: "pão", "costela" e "queijo".
    vegetariano: false, // Campo "vegetariano" é um booleano que indica se a receita é vegetariana (false, no caso).
    dataCadastro: new Date(), // Campo "dataCadastro" armazena a data de criação do documento, aqui sendo atribuído o valor da data atual através de `new Date()`.
    detalhe: { // Campo "detalhe" é um subdocumento que contém mais informações sobre a receita.
        "calorias": 1500, // O campo "calorias" armazena o número de calorias da receita, neste caso 1500.
        "porcao": 1, // O campo "porcao" define a quantidade de porções que a receita serve (1 porção).
        "veggie": false // O campo "veggie" é um booleano dentro do subdocumento "detalhe", que indica se a receita é vegana ou não (false).
    }
})
// Insere um documento com os dados da receita "Hambúrguer de Costela" na coleção "receitas", com informações sobre ingredientes, se é vegetariano ou não, e mais detalhes como calorias e porção.

use('aula02')
// Define novamente o banco de dados "aula02" para garantir que a coleção certa será utilizada nas consultas.

db.receitas.find() // select * from receitas
// Realiza uma consulta em "receitas" retornando todos os documentos, equivalente a um "SELECT * FROM receitas" no SQL.

use('aula02')
// Define novamente o banco de dados "aula02".

db.receitas.find({},{})
// Realiza uma consulta sem filtro e sem projeção, retornando todos os documentos com todos os campos.

use('aula02')
// Define novamente o banco de dados "aula02".

db.receitas.find({},{nome:1, preco:1, _id:0})
// Realiza uma consulta retornando apenas os campos "nome" e "preco", ocultando o campo "_id".

use('aula02')
// Define novamente o banco de dados.

db.receitas.insertOne({
    nome: "Hambúrguer de Cogumelo", // Nome da nova receita inserida: "Hambúrguer de Cogumelo".
    preco: 45.99, // Preço do hambúrguer: 45.99.
    ingredientes: ["pão", "cogumelo", "queijo"], // Ingredientes: pão, cogumelo, e queijo.
    vegetariano: true, // Este campo indica que a receita é vegetariana (true).
    dataCadastro: new Date(), // Armazena a data de inserção do documento, sendo a data atual.
    detalhe: { // Subdocumento "detalhe" com mais informações.
        "calorias": 700, // Número de calorias: 700.
        "porcao": 1, // Serve 1 porção.
        "veggie": true // Indica que a receita é vegana (true).
    }
})
// Insere o documento "Hambúrguer de Cogumelo" na coleção "receitas", com informações detalhadas sobre o produto.

use('aula02')
// Define o banco de dados.

db.receitas.find({vegetariano: true},{nome:1, preco:1})
// Consulta para encontrar todas as receitas que são vegetarianas (vegetariano = true), retornando apenas os campos "nome" e "preco".

use('aula02')
// Define novamente o banco de dados.

db.receitas.find({vegetariano: {$eq: true}},{nome:1, preco:1})
// Consulta semelhante à anterior, utilizando o operador $eq (igual) para filtrar receitas vegetarianas.

use('aula02')
// Define o banco de dados novamente.

db.receitas.find({nome: 'costela'},{nome:1, preco:1})
// Realiza uma consulta para encontrar receitas onde o nome seja exatamente "costela", retornando os campos "nome" e "preco".

use('aula02')
// Define novamente o banco de dados.

db.receitas.find({nome: {$ne: 'costela'}},{nome:1, preco:1})
// Consulta que encontra receitas cujo nome seja diferente de "costela" ($ne significa "not equal" ou "diferente de").

use('aula02')
// Define novamente o banco de dados.

db.receitas.find({nome: /costela/i},{nome:1, preco:1})
// Consulta onde o campo "nome" contém a string "costela", ignorando maiúsculas e minúsculas (/costela/i). Retorna os campos "nome" e "preco".

use('aula02')
// Define o banco de dados.

db.receitas.find({preco: {$gt: 20.00}}, {nome:1, preco:1, "detalhe.calorias":1})
// Consulta para encontrar receitas cujo "preco" seja maior que 20.00 ($gt = greater than). Retorna os campos "nome", "preco" e "detalhe.calorias".

use('aula02')
// Define novamente o banco de dados.

db.receitas.find({preco: {$gte: 15.00, $lte: 30.00}}, {nome:1, preco:1, "detalhe.calorias":1})
// Consulta para encontrar receitas cujo preço esteja entre 15 e 30 (inclusive), usando os operadores $gte (maior ou igual) e $lte (menor ou igual). Retorna "nome", "preco" e "detalhe.calorias".

use('aula02')
// Define novamente o banco de dados.

db.receitas.find({$and:[{preco: {$lt: 50}}, {nome: /cogu/i}]}, {nome:1, preco:1})
// Consulta que utiliza o operador lógico $and, para retornar receitas cujo preço seja menor que 50 e o nome contenha "cogu" (insensitive case). Retorna os campos "nome" e "preco".

use('aula02')
// Define o banco de dados.

db.receitas.find({$or:[{preco: {$lt: 20}}, {nome: /cogu/i}]}, {nome:1, preco:1})
// Consulta que utiliza o operador lógico $or, retornando receitas cujo preço seja menor que 20 ou cujo nome contenha "cogu". Retorna os campos "nome" e "preco".

use('aula02')
// Define o banco de dados.

db.receitas.find({$nor:[{preco: {$gte: 15}}, {preco: {$lte: 30}}]}, {nome:1, preco:1})
// Consulta utilizando o operador lógico $nor (negação de condições), retornando receitas onde o preço não esteja entre 15 e 30.

use('aula02')
// Define o banco de dados.

db.receitas.updateOne({nome: /costela/i}, {$set: {preco: 25.00}})
// Atualiza o preço de receitas cujo nome contenha "costela", usando o operador $set para alterar o valor para 25.00.

use('aula02')
// Define o banco de dados.

db.receitas.updateOne({_id: ObjectId('66ba919f55733cb337900b6b')}, {$set: {preco: 35.00}})
// Atualiza o preço da receita com o _id especificado, alterando o valor do campo "preco" para 35.00.

use('aula02')
// Define o banco de dados.

db.receitas.updateMany({preco: {$gte: 10}}, {$set: {vegetariano:true}})
// Atualiza todas as receitas cujo preço seja maior ou igual a 10, definindo o campo "vegetariano" como true.

use('aula02')
// Define o banco de dados.

db.receitas.updateMany({}, {$unset: {vegetariano: ''}})
// Remove o campo "vegetariano" de todos os documentos da coleção, usando o operador $unset.

use('aula02')
// Define o banco de dados.

db.receitas.updateOne({nome: /cogu/i}, {$push: {ingredientes: 'alface'}})
// Adiciona "alface" ao array "ingredientes" da receita cujo nome contenha "cogu", usando o operador $push.

use('aula02')
// Define o banco de dados.

db.receitas.updateMany({}, {$pull: {ingredientes: 'queijo'}})
// Remove o ingrediente "queijo" de todas as receitas, utilizando o operador $pull.

use('aula02')
// Define o banco de dados.

db.receitas.updateMany({}, {$inc: {"detalhe.calorias": -100}})
// Diminui o valor de "detalhe.calorias" em 100 para todas as receitas, utilizando o operador $inc.

use('aula02')
// Define o banco de dados.

db.receitas.deleteOne({_id: '123'})
// Deleta o documento cujo "_id" é "123".

use('aula02')
// Define o banco de dados.

db.receitas.deleteMany({preco: {$gt: 10}})
// Deleta todos os documentos cujo preço seja maior que 10.

use('aula02')
// Define o banco de dados.

db.receitas.find()
// Realiza uma consulta para verificar todos os documentos restantes na coleção "receitas".
