const fs = require('fs')

const dadosRestaurante = fs.readFileSync("/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/Exercicios/json/restaurantes.json")
const jsonRestaurantes = JSON.parse(dadosRestaurante)
use('ExercicioRestaurantes')
db.restaurantes.insertMany(jsonRestaurantes)


use('ExercicioRestaurantes')
db.restaurantes.find().limit(1)
db.restaurantes.find({},{}).count() //3772

use('ExercicioRestaurantes')
db.restaurantes.createIndex({restaurante_id:1},{unique:true})

use('ExercicioRestaurantes')
db.restaurantes.find({},{restaurante_id:1, nome:1, _id:0}).sort({nome:1}).limit(5)

use('ExercicioRestaurantes')
db.restaurantes.find().forEach(function(restaurante)) {
    {_id: restaurante._id}
}