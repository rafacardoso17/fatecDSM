const fs = require('fs'); // Módulo fs para manipulação de arquivos no Node.js.

const dadosPratos = fs.readFileSync('json/pratos.json'); // Lê o arquivo 'pratos.json' de forma síncrona e armazena o conteúdo em 'dadosPratos'.

const jsonPratos = JSON.parse(dadosPratos); // Converte o conteúdo lido (string JSON) em um objeto JavaScript.

use('FoodClub') // Seleciona o banco de dados "FoodClub".
db.pratos.insertMany(jsonPratos); // Insere múltiplos documentos no MongoDB, a partir dos dados presentes no JSON.

db.pratos.find(); // Faz uma consulta para listar todos os pratos da coleção 'pratos'.

use('FoodClub') // Seleciona novamente o banco de dados "FoodClub".
db.pratos.find({}, {nome: 1, _id:0}) // Retorna apenas os nomes dos pratos, omitindo o campo '_id' (definido como 0).

use('FoodClub') // Seleciona o banco de dados "FoodClub" para executar outra consulta.
db.pratos.find({ preco: { $gt: 15, $lt: 20 } }) // Busca pratos cujo preço seja maior que 15 ($gt) e menor que 20 ($lt).

use('FoodClub') // Seleciona o banco de dados "FoodClub".
db.pratos.find({ nome: { $regex: /frango|carne/i } }) // Usa expressão regular para encontrar pratos cujos nomes contenham 'frango' ou 'carne', ignorando diferenças de maiúsculas e minúsculas (modificador 'i').

use('FoodClub') // Seleciona o banco de dados "FoodClub" para realizar uma agregação.
db.pratos.aggregate([ // Inicia uma operação de agregação.
  {
    $lookup: { // Executa um 'lookup' (junção) entre a coleção 'pratos' e 'restaurantes'.
      from: "restaurantes", // Define a coleção 'restaurantes' como fonte de dados para a junção.
      localField: "id_restaurante", // Campo em 'pratos' usado para comparar.
      foreignField: "_id", // Campo correspondente na coleção 'restaurantes'.
      as: "local_restaurante" // Nome do novo campo onde os dados da junção serão armazenados.
    }
  },
  {
    $project: { // Limita os campos que serão retornados na consulta.
      nome: 1, // Inclui o campo 'nome' dos pratos.
      preco: 1, // Inclui o campo 'preco' dos pratos.
      "local_restaurante.local.coordinates": 1 // Inclui as coordenadas de localização do restaurante associado.
    }
  }
])
