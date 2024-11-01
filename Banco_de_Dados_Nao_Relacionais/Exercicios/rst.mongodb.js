// << A >>
// Utilizando o readFileSinc e o insertMany, para carregar todos os registros dentro de uma collection chamada restaurantes.
// Importe o módulo 'fs' (File System) do Node.js, que permitira interagir com o sistema de arquivos.
const fs = require('fs'); // Colocamos a require('fs')dentro de uma constante tabém chamada de fs.

// Agora vamos criar uma outra const que irá ler o arquivo 'restaurantes.jason' da pasta especificada.
// O segundo argumento 'utf8' garante que o conteudo seja lido como texto.
const dadosRestaurante = fs.readFileSync(
    "/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/Exercicios/json/restaurantes.json",
    "utf8");

// Aqui vamos converter o conteudo lido do arquivo (que esté em formato JSON) em um objeto JavaScript, Isso permitira a manipulação do codigo.
const jsonRestaurantes = JSON.parse(dadosRestaurante); // dadosRestaurante é um arquivo JSON e foi convertido em um objeto chamado jsonRestaurantes

// Autera para o banco de dados exRsts (abreviação de Exercicio Restaurante)
use('exRsts');
// Inserindo multiplos documentos (dados dos restaurantes) na colection rsts do banco de dados exRsts
// 'jasonRestaurantes' contem os dados em formato de array, que foram lidos e convertidos anteriormente.
db.rsts.insertMany(jsonRestaurantes);

use('exRsts');
// Faz a consulta para para encontrar um documento da collection 'rsts' do banco de dados exRsts
// 'limit()' limita a quantidade de documentos que sera retornado na pesquisa
db.rsts.find().limit(1);


// << B >>
// Conta o número total de documentos na coleção 'rsts'
// A consulta 'finsd().count()' retorna um valor total de documentos, pois '.count()' conta o numero de documentos dentro da collection
use('exRsts');
db.rsts.find().count(); // return 3772

use('exRsts')
// Criar um indice na coleção 'rsts' com base no campo 'restaurante_id' ( contido no arquivo em JSON), e definir que este campo deve ser unico
// Isso garante que não existam dois documentos com o mesmo 'restaurante_id'
db.rsts.createIndex({restaurante_id: 1}, {unique: true});

use('exRsts')
// Realiza uma consulta que retorna os campos 'restaurante_id' e 'nome' dos restaurantes, excluindo o campo '_id'.
// Os resultados são ordenados em ordem alfabetica com base no campo 'nome'.
// O metodo 'limit()', limitará a saída com o valor inserido em seu argumento "()".
db.rsts.find({},{restaurante_id:1, nome:1, _id:0}).sort({nome:1}).limit(5)


// << C >>
// Para cada restaurante encontrado na coleção, o codigo atualiza o campo 'local' adicionando informações de geolocalização.
// O campo 'local' tem o tipo 'Point' (usado para representar coordenadas geograficas).
// As coordenadas são obtidas dos valores 'longitude e 'latitude' armazenados dentro de 'endereços.coord'.
use('exRsts')
db.rsts.find().forEach(function(rst){
    db.rsts.updateOne(
        {_id: rst._id}, // Filtra o documento com base no seu '_id'.
        {
            $set: {// O operador `$set` atualiza (ou cria) o campo 'local'.
                local:{
                    type: 'Point', // Define o tipo como 'Point' para suportar índices geoespaciais
                    coordinates: [rst.endereço.coord[0], rst.endereço.coord[1]] // Extrai as coordenadas (longitude e latitude) do campo 'endereço.coord'
                }}
        })
})

use('exRsts')
// Faz uma consulta e retorna os documentos da collection 'rsts' ordenados pelo campo 'nome'
// Aqui, os resultados exibem apenas o campo 'nome', excluindo o campo '_id', e o limite de resultado é 2
db.rsts.find({},{_id:0}).sort({nome:1}).limit(2)


// << D >>
// Remove o campo 'endereço.coord' de cada documento na collection 'rsts'
// `$unset`remove o campo especificado. No caso, estamos removendo 'coord' dentro do campo 'endereço'.
use('exRsts')
db.rsts.find().forEach(function(rst){
    db.rsts.updateOne(
        {_id: rst._id}, // Filtra o documento com base no '_id'.
        {
            $unset:{'endereço.coord': ""} // o operador `$unset`remove o campo 'endereço.coord
        }
    )
})


// << 1 >>
// Consulta os campos 'restaurante_id', 'nome', 'endereço.cep' e 'cozinha' de todos os documentos na coleção 'rsts'.
use('exRsts')
db.rsts.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1, _id:0})


// << 2 >>
// Consulta os campos 'restaurante_id', 'nome', 'endereço.cep' e 'cozinha' de todos os documentos na coleção 'rsts', excluindo o campo '_id'.
use('exRsts')
db.rsts.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1, _id:0})


// << 3 >>
//Consulta os campos 'restaurante_id', nome, bairro, 'endereço,cep' e cozinha de todos os documentos da collection 'rsts', excluindo o campo '_id'.
use('exRsts')
db.rsts.find({},{_id:0, 'endereço.cep':1, bairro:1, nome:1, restaurante_id:1})


// << 4 >>
// Consulta documentos onde o bairro é 'Bronx', retornando todos os campos, com limite de 5 documentos.
use('exRsts')
db.rsts.find({bairro: 'Bronx'},{nome:1, _id:0, bairro:1})


// << 5 >>
// Consulta documentos onde bairro é 'Bronx', retornando todos os campos com limite de 5 documentos
use('exRsts')
db.rsts.find({bairro: 'Bronx'},{nome:1, _id:0, bairro:1}).limit(5)

// << 6 >>
// Consulta documentos onde o nome começa com 'Bronx', retornando todos os campos, com limite de 5 documentos e pulando os 5 primeiros.
use('exRsts')
db.rsts.find({bairro: 'Bronx'}, {}).limit(5).skip(5)


// << 7 >>
// Consulta documentos onde o nome começa com 'Will' (ignora maiuscúlas e minuscúlas), retornando os campos 'nome', 'bairro' e cozinha.
use('exRsts')
db.rsts.find({})