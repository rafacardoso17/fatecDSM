// << A >>
// Importa o módulo 'fs' (File System) do Node.js, que permite interagir com o sistema de arquivos.
const fs = require('fs');

// Lê o arquivo 'restaurantes.json' da pasta especificada. O segundo argumento 'utf8' garante que o conteúdo seja lido como texto.
const dadosRestaurante = fs.readFileSync("/home/rafael/Documentos/Repositories/fatecDSM/Banco_de_Dados_Nao_Relacionais/Exercicios/json/restaurantes.json", 'utf8');

// Converte o conteúdo lido do arquivo (que está em formato JSON) em um objeto JavaScript, permitindo manipulação no código.
const jsonRestaurantes = JSON.parse(dadosRestaurante);

// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// Insere múltiplos documentos (dados dos restaurantes) na coleção 'restaurantes' do banco de dados.
// 'jsonRestaurantes' contém os dados em formato de array, que foram lidos e convertidos anteriormente.
db.restaurantes.insertMany(jsonRestaurantes);


// Alterna novamente para o banco de dados 'ExercicioRestaurantes' (garantindo que ele esteja sendo usado).
use('ExercicioRestaurantes');

// Faz uma consulta para encontrar o primeiro documento da coleção 'restaurantes' e exibe o resultado.
// 'limit(1)' garante que apenas um documento será retornado.
db.restaurantes.find().limit(1);


// Alterna para o banco de dados 'ExercicioRestaurantes' (garantindo que ele está sendo usado).
use('ExercicioRestaurantes');

// << B >>
// Conta o número total de documentos na coleção 'restaurantes'.
// A consulta `find({}, {})` retorna todos os documentos e `.count()` conta quantos documentos existem. O número esperado é 3772.
db.restaurantes.find({},{}).count(); //3772 


// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// Cria um índice na coleção 'restaurantes' com base no campo 'restaurante_id', e define que esse campo deve ser único.
// Isso garante que não existam dois documentos com o mesmo 'restaurante_id'.
db.restaurantes.createIndex({restaurante_id: 1}, {unique: true});


// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// Realiza uma consulta que retorna os campos 'restaurante_id' e 'nome' dos restaurantes, excluindo o campo '_id'.
// Os resultados são ordenados em ordem alfabética com base no campo 'nome'.
// A cláusula 'limit(5)' limita a saída a apenas 5 documentos.
db.restaurantes.find({},{restaurante_id: 1, nome: 1, _id: 0}).sort({nome: 1}).limit(5);


// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// << C >>
// Para cada restaurante encontrado na coleção, o código atualiza o campo 'local' adicionando informações de geolocalização.
// O campo 'local' tem o tipo 'Point' (usado para representar coordenadas geográficas).
// As coordenadas são obtidas dos valores 'longitude' e 'latitude' armazenados dentro de 'endereço.coord'.
db.restaurantes.find().forEach(function(restaurante) {
    db.restaurantes.updateOne(
        {_id: restaurante._id},  // Filtra o documento com base no seu '_id'.
        {
            $set: {  // O operador '$set' atualiza (ou cria) o campo 'local'.
                local: {
                    type: 'Point',  // Define o tipo como 'Point' para suportar índices geoespaciais.
                    coordinates: [restaurante.endereço.coord[0], restaurante.endereço.coord[1]]  // Extrai as coordenadas (longitude e latitude) do campo 'endereço.coord'.
                }
            }
        }
    );
});


// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// Faz uma consulta e retorna os documentos da coleção 'restaurantes' ordenados pelo campo 'nome'.
// Aqui, os resultados exibem apenas o campo 'nome', excluindo o campo '_id', e o limite de resultados é 2.
db.restaurantes.find({},{_id: 0}).sort({nome: 1}).limit(2);


// Alterna para o banco de dados 'ExercicioRestaurantes'.
use('ExercicioRestaurantes');

// << D >>
// Remove o campo 'endereço.coord' de cada documento na coleção 'restaurantes'.
// '$unset' remove o campo especificado. No caso, estamos removendo 'coord' dentro do campo 'endereço'.
db.restaurantes.find().forEach(function(restaurante) {
    db.restaurantes.updateOne(
        {_id: restaurante._id},  // Filtra o documento com base no '_id'.
        {
            $unset: {'endereço.coord': ""}  // O operador '$unset' remove o campo 'endereço.coord'.
        }
    );
});

// << 1 >>
// Consulta os campos 'restaurante_id', 'nome', 'bairro' e 'cozinha' de todos os documentos na coleção 'restaurantes'.
use('ExercicioRestaurantes')
db.restaurantes.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1})

// << 2 >>
// Consulta os campos 'restaurante_id', 'nome', 'bairro' e 'cozinha' de todos os documentos na coleção 'restaurantes', excluindo o campo '_id'.
use('ExercicioRestaurantes')
db.restaurantes.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1, _id:0})

// << 3 >>
// Consulta os campos 'restaurante_id', 'nome', 'bairro', 'endereço.cep' e 'cozinha' de todos os documentos na coleção 'restaurantes', excluindo o campo '_id'.
use('ExercicioRestaurantes')
db.restaurantes.find({},{restaurante_id:1, nome:1, bairro:1, 'endereço.cep':1, cozinha:1, _id:0})

// << 4 >>
// Consulta documentos onde o bairro é 'Bronx', retornando todos os campos.
use('ExercicioRestaurantes')
db.restaurantes.find({bairro: 'Bronx'},{})

// << 5 >>
// Consulta documentos onde o bairro é 'Bronx', retornando todos os campos, com limite de 5 documentos.
use('ExercicioRestaurantes')
db.restaurantes.find({bairro: 'Bronx'},{}).limit(5)

// << 6 >>
// Consulta documentos onde o bairro é 'Bronx', retornando todos os campos, com limite de 5 documentos e pulando os primeiros 5.
use('ExercicioRestaurantes')
db.restaurantes.find({bairro: 'Bronx'},{}).limit(5).skip(5)

// << 7 >>
// Consulta documentos onde o nome começa com 'Wil' (ignora maiúsculas e minúsculas), retornando os campos 'nome', 'bairro' e 'cozinha'.
use('ExercicioRestaurantes')
db.restaurantes.find({nome:/^Wil/i},{nome:1, bairro:1, cozinha:1})

// << 8 >>
// Consulta documentos onde o nome contém a substring 'ces' (ignora maiúsculas e minúsculas), retornando os campos 'nome', 'bairro' e 'cozinha'.
use('ExercicioRestaurantes')
db.restaurantes.find({nome:{$regex: /ces/i}},{nome:1, bairro:1, cozinha:1})

// << 9 >>
// Consulta documentos onde o nome contém a substring 'Reg' (ignora maiúsculas e minúsculas), retornando os campos 'nome', 'bairro' e 'cozinha'.
use('ExercicioRestaurantes')
db.restaurantes.find({nome:/Reg/i},{nome:1, bairro:1, cozinha:1})

// << 10 >>
// Consulta documentos onde o bairro é 'Bronx' e a cozinha é 'American ' ou 'Chinese'. Nota: Há um erro no valor de 'cozinha' que contém um espaço ao final.
use('ExercicioRestaurantes')
db.restaurantes.find({bairro: 'Bronx', 
    $or:[
        {cozinha:'American '}, // Nota: Há um espaço a mais ao final do valor 'American ' na base de dados.
        {cozinha: 'Chinese'}
    ]},{nome:1, cozinha:1, bairro:1, _id:0})

// << 11 >>
// Consulta documentos onde o bairro está na lista fornecida, retornando os campos 'restaurante_id', 'nome', 'bairro' e 'cozinha', excluindo o campo '_id'.
use('ExercicioRestaurantes')
db.restaurantes.find({
    bairro: {
        $in: ['Staten','Island', 'Queens', 'Bronx', 'Brooklyn']
    }
}, {restaurante_id:1,nome:1, bairro:1, cozinha:1, _id:0})

// << 12 >>
// Consulta documentos onde o bairro não está na lista fornecida, retornando os campos 'restaurante_id', 'nome', 'bairro' e 'cozinha', excluindo o campo '_id'.
use('ExercicioRestaurantes')
db.restaurantes.find({
    bairro: {
        $nin: ['Staten','Island', 'Queens', 'Bronx', 'Brooklyn']
    }
}, {restaurante_id:1,nome:1, bairro:1, cozinha:1, _id:0})

// << 13 >>
// Cria um índice geoespacial '2dsphere' no campo 'local' para permitir consultas geoespaciais como $near e $geoWithin.
// O índice '2dsphere' é necessário para que o MongoDB possa realizar consultas de proximidade e dentro de áreas geográficas de forma eficiente.
use('ExercicioRestaurantes')
db.restaurantes.createIndex({local: '2dsphere'})

// Tenta realizar uma consulta geoespacial para encontrar documentos próximos a um ponto específico,
// com um máximo de 1000 metros de distância.
// A consulta $near é usada para encontrar documentos que estão próximos a um ponto especificado,
// onde o ponto é dado por suas coordenadas de latitude e longitude.
// O parâmetro $maxDistance define a distância máxima em metros para a busca de proximidade.
use('ExercicioRestaurantes')
db.restaurantes.find({
    local: {
        $near: {
            $geometry: {
                type: "Point",  // Tipo de geometria a ser usado, 'Point' indica um ponto específico.
                coordinates: [-73.935242, 40.730610]  // Coordenadas do ponto de referência para a busca.
            },
            $maxDistance: 1000  // Distância máxima em metros para a busca ao redor do ponto.
        }
    }
},{nome:1, _id:0, bairro:1})  // Exibe apenas os campos 'nome' e 'bairro', excluindo o campo '_id'.


use('ExercicioRestaurantes')
// Realiza uma consulta geoespacial para encontrar documentos dentro de um círculo de 1 km (convertido para radianos) ao redor de um ponto específico.
// O operador $geoWithin é usado para encontrar documentos que estão dentro de uma área geográfica especificada.
// O parâmetro $centerSphere define um círculo com um centro e um raio. O raio é dado em radianos, onde 1/6378.1 é aproximadamente 1 km.
// As coordenadas fornecidas são o centro do círculo.
db.restaurantes.find({
    local: {
        $geoWithin: {
            $centerSphere: [[-73.935242, 40.730610], 1 / 6378.1]  // Círculo de raio de 1 km em radianos ao redor do ponto.
        }
    }
}, {nome:1, bairro:1, restaurante_id:1, _id:0}).limit(5)  // Limita os resultados a 5 documentos, exibindo os campos 'nome', 'bairro', e 'restaurante_id', e excluindo '_id'.


// << 14 >>
// Realiza uma consulta geoespacial semelhante à anterior, mas com um ponto diferente e uma distância máxima maior (5000 metros).
// O parâmetro $maxDistance define a distância máxima em metros para a busca ao redor do ponto.
use('ExercicioRestaurantes')
db.restaurantes.find({
    local: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-73.856077, 40.84844]  // Novas coordenadas do ponto de referência.
            },
            $maxDistance: 5000  // Distância máxima de 5000 metros para a busca.
        }
    }
},{nome:1, _id:0, bairro:1})  // Exibe apenas os campos 'nome' e 'bairro', excluindo o campo '_id'.


use('ExercicioRestaurantes')
// Realiza uma consulta geoespacial para encontrar documentos dentro de um círculo com raio de 5 km (convertido para radianos) ao redor de um ponto específico.
// O raio de 5 km é convertido em radianos e o parâmetro $centerSphere define o círculo de busca.
// As coordenadas fornecidas são o centro do círculo.
db.restaurantes.find({
    local: {
        $geoWithin: {
            $centerSphere: [[-73.856077, 40.84844], 5 / 6378.1]  // Círculo de raio de 5 km em radianos ao redor do ponto.
        }
    }
}, {nome:1, bairro:1, restaurante_id:1, _id:0})  // Exibe os campos 'nome', 'bairro', e 'restaurante_id', e exclui o campo '_id'.


// << 15 >>
// Realiza uma consulta geoespacial para encontrar documentos dentro de um polígono definido pelas coordenadas fornecidas.
// O operador $polygon é usado para definir uma área geográfica em forma de polígono. 
// O polígono é definido por uma série de coordenadas que formam um caminho fechado. 
// Todos os documentos que caem dentro dessa área poligonal serão retornados pela consulta.
use('ExercicioRestaurantes')
db.restaurantes.find({
    local: {
        $geoWithin: {
            $polygon: [[
                -73.9,  // Coordenada do vértice inferior esquerdo do polígono.
                40.7
            ],
            [
                -73.8,  // Coordenada do vértice superior esquerdo do polígono.
                40.8
            ],
            [
                -73.7,  // Coordenada do vértice superior direito do polígono.
                40.7
            ],
            [
                -73.9,  // Coordenada do vértice inferior direito do polígono (deve fechar o polígono).
                40.7
            ]]
        }
    }
})
use('ExercicioRestaurantes')
db.restaurantes.find().limit(1)