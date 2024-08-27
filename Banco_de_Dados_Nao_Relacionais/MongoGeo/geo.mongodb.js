// Comentário: Criação de índices geoespaciais do tipo 2dsphere nas coleções 'estados' e 'municipios'.

// Seleciona o banco de dados "geo" para uso.
// Isso é necessário para garantir que todas as operações subsequentes serão realizadas no banco de dados correto.
use('geo')

// Cria um índice geoespacial do tipo "2dsphere" na coleção "estados".
// O campo "local" deve conter dados no formato GeoJSON, como pontos, linhas ou polígonos.
// O índice "2dsphere" permite realizar operações geoespaciais, como encontrar objetos dentro de uma área específica
// ou calcular distâncias. Neste caso, o campo "local" deve armazenar as coordenadas geográficas dos estados.
db.estados.createIndex({local: '2dsphere'})

// Seleciona novamente o banco de dados "geo" para garantir que está no contexto correto.
// Embora o banco de dados já tenha sido selecionado anteriormente, este comando assegura que todas as operações subsequentes
// continuarão a ser realizadas no banco de dados "geo".
use('geo')

// Cria um índice geoespacial do tipo "2dsphere" na coleção "municipios".
// Assim como no caso anterior, o índice é criado no campo "local" da coleção "municipios",
// permitindo consultas geoespaciais baseadas nas coordenadas armazenadas nesse campo.
db.municipios.createIndex({local: '2dsphere'})

// Comentário: Consultas geoespaciais na coleção "municipios".

// Seleciona o banco de dados "geo" para garantir o contexto adequado.
use('geo')

// Realiza uma consulta geoespacial na coleção "municipios" usando o operador $near.
// A consulta procura municípios próximos a um ponto específico, que neste caso é
// representado pelas coordenadas [-47.4496, -23.5310] (localização da Fatec Votorantim).
// O operador $maxDistance limita os resultados a municípios dentro de um raio de 20 km (20000 metros).
// A projeção {nome: 1, _id: 0} é usada para retornar apenas o campo "nome" dos municípios encontrados, sem exibir o "_id".
db.municipios.find({
    local: {        
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-47.4496, -23.5310] // Coordenadas da Fatec Votorantim
            },
            $maxDistance: 20000 // Distância máxima em metros (20 km)
        }        
    }
},{nome:1, _id:0})

// Seleciona novamente o banco de dados "geo" para garantir o contexto adequado.
use('geo')

// Realiza uma consulta geoespacial na coleção "municipios" usando o operador $geoWithin.
// A consulta busca municípios que estão dentro de um círculo definido pelo operador $centerSphere,
// que define um círculo no globo terrestre com centro em [-47.4496, -23.5310] e um raio de 20 km.
// O raio é convertido em radianos dividindo a distância pelo raio da Terra (6378.1 km).
// Assim como antes, a projeção {nome: 1, _id: 0} retorna apenas o nome dos municípios encontrados.
db.municipios.find({
    local:{
        $geoWithin: {
            $centerSphere: [[-47.4496, -23.5310], 20 / 6378.1] // Raio em radianos
        }
    }
},{nome:1, _id:0})

// Comentário: Consulta geoespacial utilizando polígono.

// Seleciona novamente o banco de dados "geo" para garantir o contexto adequado.
use('geo')

// Realiza uma consulta geoespacial na coleção "municipios" usando o operador $geoWithin com um polígono.
// A consulta busca municípios que estão dentro do polígono definido por uma série de coordenadas.
// As coordenadas são fornecidas em formato GeoJSON, formando os vértices do polígono.
// O polígono aqui representa uma área complexa que pode ter múltiplos lados e é útil para buscar
// documentos dentro de formas geográficas irregulares.
db.municipios.find({
    local: {
        $geoWithin: {
            $polygon:[[
                -47.85733997478252,  // Coordenada de um dos vértices do polígono
                -23.339904423482352  // Coordenada de um dos vértices do polígono
              ],
              [
                -48.404510091559615,
                -23.479432802037877
              ],
              [
                -48.06597207209157,
                -23.61875047567557
              ],
              [
                -46.6425024058033,
                -23.622793630334655
              ],
              [
                -47.04133804331687,
                -22.84080358956362
              ],
              [
                -47.74871548981736,
                -22.668431184268783
              ],
              [
                -47.85733997478252,
                -23.339904423482352
              ]]
        }
    }
},{nome:1, _id:0})

// Comentário: Consulta geoespacial utilizando uma caixa (box).

// Seleciona novamente o banco de dados "geo" para garantir o contexto adequado.
use('geo')

// Realiza uma consulta geoespacial na coleção "municipios" usando o operador $geoWithin com uma caixa (box).
// A consulta busca municípios que estão dentro de uma área retangular definida por dois pontos opostos,
// que representam o canto inferior esquerdo e o canto superior direito da caixa.
// Esse método é útil para localizar todos os documentos dentro de uma área retangular específica.
db.municipios.find({
    local:{
        $geoWithin:{
            $box:[
                [-48.45495997610041, -22.8925972133804], // Canto inferior esquerdo da caixa
                [-46.38160082070993, -23.8743301405529]  // Canto superior direito da caixa
            ]
        }
    }
},{nome:1, _id:0})
