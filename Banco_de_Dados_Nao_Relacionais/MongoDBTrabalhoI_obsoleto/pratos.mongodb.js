const fs = require('fs');

const dadosPratos = fs.readFileSync('/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/MongoDBTrabalhoI/json/pratos.json');

const jsonPratos = JSON.parse(dadosPratos);

use('FoodClub')
db.pratos.insertMany(jsonPratos);

use('FoodClub')
db.pratos.find();


// Buscar todos


// Maior que 15 menos que 20


// Nome que contém Frango ou Carne
