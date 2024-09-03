// Importa o módulo 'fs' (File System) para manipular o sistema de arquivos, permitindo ler e escrever arquivos no disco.
const fs = require('fs')

// Lê o conteúdo do arquivo "municipios.json" na pasta "json" e o armazena na variável 'dadosMunicipios'.
// O método readFileSync lê o arquivo de forma síncrona, ou seja, o código aguarda até que a leitura esteja completa antes de continuar.
const dadosMunicipios = fs.readFileSync("C:/Users/r17ca/Documents/Faculdade/fatecDSM/Banco_de_Dados_Nao_Relacionais/MongoGeo/json/municipios.json");


// Converte o conteúdo lido (que está em formato de string) em um objeto JavaScript usando JSON.parse().
// A variável 'jsonMunicipios' agora contém os dados do arquivo "municipios.json" como um array de objetos ou um objeto.
const jsonMunicipios = JSON.parse(dadosMunicipios)

// Ativa o banco de dados para uso com a coleção "municipios".
// A função 'use' provavelmente faz parte do contexto de um shell do MongoDB, como o MongoDB Shell, e serve para selecionar o banco de dados.
// O código assume que a coleção "municipios" pertence a um banco de dados cujo nome não foi especificado.
use('geo')

// Insere todos os dados do JSON na coleção "municipios".
// O método 'insertMany' insere todos os documentos (ou seja, os objetos JSON) no array 'jsonMunicipios' na coleção "municipios".
db.municipios.insertMany(jsonMunicipios)

// Cria um índice único na coleção "municipios" para o campo "codigo_ibge".
// O índice é criado com o objetivo de garantir que os valores no campo "codigo_ibge" sejam únicos em toda a coleção.
// O índice é nomeado como "idx+municipios_codigoIbge".
db.municipios.createIndex({codigo_ibge:1}, {unique:true, name: "idx+municipios_codigoIbge"})

// Conta o número total de documentos (ou seja, registros) presentes na coleção "municipios" e retorna esse valor.
// O método 'find().count()' recupera todos os documentos da coleção e conta quantos existem.
db.municipios.find().count()
