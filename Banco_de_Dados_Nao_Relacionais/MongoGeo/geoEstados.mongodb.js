// Seleciona o banco de dados "geo" para uso.
use('geo')

// Define um array de objetos chamado 'dadosEstados'.
// Cada objeto representa um estado do Brasil, contendo os campos 'codigo_uf', 'uf' (sigla do estado), 'nome', 'latitude' e 'longitude'.
// Este array contém as informações de todos os 27 estados brasileiros.
const dadosEstados = [
    // Estado de Rondônia
	{
		"codigo_uf": 11,
		"uf": "RO",
		"nome": "Rondônia",
		"latitude": -10.83,
		"longitude": -63.34
	},
    // Estado do Acre
	{
		"codigo_uf": 12,
		"uf": "AC",
		"nome": "Acre",
		"latitude": -8.77,
		"longitude": -70.55
	},
    // Estado do Amazonas
	{
		"codigo_uf": 13,
		"uf": "AM",
		"nome": "Amazonas",
		"latitude": -3.47,
		"longitude": -65.1
	},
    // Estado de Roraima
	{
		"codigo_uf": 14,
		"uf": "RR",
		"nome": "Roraima",
		"latitude": 1.99,
		"longitude": -61.33
	},
    // Estado do Pará
	{
		"codigo_uf": 15,
		"uf": "PA",
		"nome": "Pará",
		"latitude": -3.79,
		"longitude": -52.48
	},
    // Estado do Amapá
	{
		"codigo_uf": 16,
		"uf": "AP",
		"nome": "Amapá",
		"latitude": 1.41,
		"longitude": -51.77
	},
    // Estado do Tocantins
	{
		"codigo_uf": 17,
		"uf": "TO",
		"nome": "Tocantins",
		"latitude": -9.46,
		"longitude": -48.26
	},
    // Estado do Maranhão
	{
		"codigo_uf": 21,
		"uf": "MA",
		"nome": "Maranhão",
		"latitude": -5.42,
		"longitude": -45.44
	},
    // Estado do Piauí
	{
		"codigo_uf": 22,
		"uf": "PI",
		"nome": "Piauí",
		"latitude": -6.6,
		"longitude": -42.28
	},
    // Estado do Ceará
	{
		"codigo_uf": 23,
		"uf": "CE",
		"nome": "Ceará",
		"latitude": -5.2,
		"longitude": -39.53
	},
    // Estado do Rio Grande do Norte
	{
		"codigo_uf": 24,
		"uf": "RN",
		"nome": "Rio Grande do Norte",
		"latitude": -5.81,
		"longitude": -36.59
	},
    // Estado da Paraíba
	{
		"codigo_uf": 25,
		"uf": "PB",
		"nome": "Paraíba",
		"latitude": -7.28,
		"longitude": -36.72
	},
    // Estado de Pernambuco
	{
		"codigo_uf": 26,
		"uf": "PE",
		"nome": "Pernambuco",
		"latitude": -8.38,
		"longitude": -37.86
	},
    // Estado de Alagoas
	{
		"codigo_uf": 27,
		"uf": "AL",
		"nome": "Alagoas",
		"latitude": -9.62,
		"longitude": -36.82
	},
    // Estado de Sergipe
	{
		"codigo_uf": 28,
		"uf": "SE",
		"nome": "Sergipe",
		"latitude": -10.57,
		"longitude": -37.45
	},
    // Estado da Bahia
	{
		"codigo_uf": 29,
		"uf": "BA",
		"nome": "Bahia",
		"latitude": -13.29,
		"longitude": -41.71
	},
    // Estado de Minas Gerais
	{
		"codigo_uf": 31,
		"uf": "MG",
		"nome": "Minas Gerais",
		"latitude": -18.1,
		"longitude": -44.38
	},
    // Estado do Espírito Santo
	{
		"codigo_uf": 32,
		"uf": "ES",
		"nome": "Espírito Santo",
		"latitude": -19.19,
		"longitude": -40.34
	},
    // Estado do Rio de Janeiro
	{
		"codigo_uf": 33,
		"uf": "RJ",
		"nome": "Rio de Janeiro",
		"latitude": -22.25,
		"longitude": -42.66
	},
    // Estado de São Paulo
	{
		"codigo_uf": 35,
		"uf": "SP",
		"nome": "São Paulo",
		"latitude": -22.19,
		"longitude": -48.79
	},
    // Estado do Paraná
	{
		"codigo_uf": 41,
		"uf": "PR",
		"nome": "Paraná",
		"latitude": -24.89,
		"longitude": -51.55
	},
    // Estado de Santa Catarina
	{
		"codigo_uf": 42,
		"uf": "SC",
		"nome": "Santa Catarina",
		"latitude": -27.45,
		"longitude": -50.95
	},
    // Estado do Rio Grande do Sul
	{
		"codigo_uf": 43,
		"uf": "RS",
		"nome": "Rio Grande do Sul",
		"latitude": -30.17,
		"longitude": -53.5
	},
    // Estado do Mato Grosso do Sul
	{
		"codigo_uf": 50,
		"uf": "MS",
		"nome": "Mato Grosso do Sul",
		"latitude": -20.51,
		"longitude": -54.54
	},
    // Estado do Mato Grosso
	{
		"codigo_uf": 51,
		"uf": "MT",
		"nome": "Mato Grosso",
		"latitude": -12.64,
		"longitude": -55.42
	},
    // Estado de Goiás
	{
		"codigo_uf": 52,
		"uf": "GO",
		"nome": "Goiás",
		"latitude": -15.98,
		"longitude": -49.86
	},
    // Distrito Federal
	{
		"codigo_uf": 53,
		"uf": "DF",
		"nome": "Distrito Federal",
		"latitude": -15.83,
		"longitude": -47.86
	}
]

// Insere todos os documentos do array 'dadosEstados' na coleção "estados".
// Cada objeto do array é inserido como um documento na coleção.
db.estados.insertMany(dadosEstados)

// Seleciona novamente o banco de dados "geo" para garantir o contexto correto.
use('geo')

// Conta o número total de documentos na coleção "estados".
// O método find().count() retorna o total de estados inseridos, que deve ser 27.
db.estados.find().count() // Conta o numero de estados = 27

// Cria um índice único na coleção "estados" para o campo "uf".
// O índice é nomeado como "idx_estado_uf" e garante que cada sigla de estado seja única na coleção, evitando duplicações.
use('geo')
db.estados.createIndex({uf: 1}, {unique: true, name: 'idx_estado_uf'})

// Seleciona novamente o banco de dados "geo".
use('geo')

// Recupera e exibe todos os documentos da coleção "estados".
db.estados.find()
