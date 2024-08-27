// Seleciona o banco de dados "geo" para uso.
// Essa linha é comum em shells de banco de dados como o MongoDB Shell.
use('geo')

// Itera sobre cada documento da coleção "estados".
// A função find() recupera todos os documentos na coleção "estados" e forEach() aplica uma função a cada documento recuperado.
db.estados.find().forEach(function(estado) {
    
    // Atualiza cada documento individualmente na coleção "estados".
    db.estados.updateOne(
        // Seleciona o documento que será atualizado, usando o campo "_id" para garantir que apenas o documento atual seja modificado.
        {_id: estado._id},

        // Define as mudanças a serem aplicadas ao documento selecionado.
        {
            // O operador $set modifica o documento existente, adicionando ou atualizando o campo especificado.
            $set: {
                // Cria um campo "local" que será um objeto do tipo GeoJSON "Point".
                // O campo "coordinates" recebe um array com os valores de "longitude" e "latitude" do documento atual.
                local: {
                    type: 'Point',
                    coordinates: [estado.longitude, estado.latitude]
                }
            },
            
            // O operador $unset remove os campos especificados do documento.
            // Aqui, os campos "latitude" e "longitude" são removidos, já que suas informações foram movidas para o campo "local".
            $unset: {latitude: '', longitude: ""}
        }
    )
})

use('geo')
db.estados.find({}, {nome:1, local:1})
