const fs = require('fs');

const dadosRestaurantes = fs.readFileSync('json/restaurantes.json');

const jsonRestaurantes = JSON.parse(dadosRestaurantes);

use('FoodClub')
db.restaurantes.insertMany(jsonRestaurantes);

use('FoodClub')
db.restaurantes.createIndex({ local: "2dsphere" });

use('FoodClub')
db.restaurantes.find()

//Listar nome dos restaurantes
use('FoodClub')
db.restaurantes.find({}, {nome:1, _id:0})

// Nome que contém RE ou CARNE
use('FoodClub')
db.pratos.find({ nome: { $regex: /carne/i } }, {nome:1, _id:0})

// Selecionar Restaurante fora de Sorocaba
use('FoodClub')
db.restaurantes.find({ cep: { $not: /^18[0-1]\d{2}-\d{3}$/ } })

// Listar pratos do Restaurante pelo id
use('FoodClub')
db.pratos.find({ id_restaurante: "66f206e4054b2f6345c63648" })

// Localizar restaurantes em um raio de 10km da prefeitura de sorocaba e listar os pratos (-23.502639319232085, -47.45335585792438)
use('FoodClub');
db.restaurantes.find(
  {
    local: {
      $geoWithin: {
        $centerSphere: [
          [-47.45335585792438, -23.502639319232085], // Coordenadas da Prefeitura de Sorocaba
          10 / 6378.1 // Raio em radianos (10 km dividido pelo raio da Terra)
        ]
      }
    }
  },
  {
    nome: 1,
    _id: 0
  }
)


// Pegar as coordenadas pelo nome da rua
use('FoodClub')
db.restaurantes.find({
  "local.rua": /Alameda das Primaveras/i
}, {
  "local.coordinates": 1,
  "local.rua": 1
})
