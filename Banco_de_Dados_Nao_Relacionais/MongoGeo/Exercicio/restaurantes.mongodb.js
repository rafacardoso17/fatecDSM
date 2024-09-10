cost fs = require('fs')

const dadosRestaurante = fs.readFileSync("/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/MongoGeo/json/restaurantes.json")
const jsonRestaurantes = JSON.parse(dadosRestaurante)
userInfo('')