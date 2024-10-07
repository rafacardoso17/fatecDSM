const fs = require('fs');

const dadosRestaurantes = fs.readFileSync('/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/MongoDBTrabalhoI/json/restaurantes.json');

const jsonRestaurantes = JSON.parse(dadosRestaurantes);

use('FoodClub')
db.restaurantes.insertMany(jsonRestaurantes);

use('FoodClub')
db.restaurantes.find();

// Selecionar Restaurante fora de Sorocaba


// Listar pratos do Restaurante pelo id

// Localizar restaurantes em um raio de 10km e listar os pratos

// Pegar as coordenadas pelo nome da rua
