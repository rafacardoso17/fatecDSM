/* Antes de criar um banco de dados eu primeiramente tive que conectar no localhost:27017 */

// Comando usado para acessar o banco de dados, caso o banco de dados não exista, será definido para ser utilizado nas operações subsequentes.
use('estudandoAula02') 

// Insere um novo documento na coleção "receitas"
db.receitas.insertOne({
    _id: "123", // Definido a chave primária que identifica o documento de forma única na coleção. Neste caso, foi manualmente definido como "123"
    nome: "Hamburguer de Costela", // Campo "nome" define o nome da receita 
    preco: 15.99, // Campo "preco" define o preço da receita
    ingredientes: ["pão", "costela", "queijo"], // Campo "ingredientes" é uma array (os conchetes representam a array "[]") que armazena os ingredientes da receita.
    vegetariano: false, // Campo "vegetariano" é um booleano que indica se a receita é vegetariana (false, no caso).
    dataCadastro: new Date(), // Campo "dataCadastro" armazena a data de criação do documento, aqui sendo atribuído o valor da data atual através do `new Date()`
    detalhe: { // Campo "detalhe" é um subdocumento que contém mais informações sobre a receita
        "calorias": 1500, // Campo "calorias" armazena o número de calorias da receita
        "porcao": 1, // Campo "porcao" define a quantidade de porções que a receita serve por pessoa
        "veggie": false // O campo "veggie" é um booleano dentro do subdocumento "detalhe", que indica se a receita é vegana ou não (false)
    }
}) // Feito este comando de insertOne(), preenchendo os campos, e os subdocumentos será inserido na Collection "receitas" o item "Hamburguer de Costela"

// Acessa novamente o banco de dados para realizar operações de busca
use('estudandoAula02')
db.receitas.find() // "find" é equivalente ao comando "select" no banco de dados relacional, ou seja, exibe o conteúdo da coleção "receitas"

// Acessa o banco de dados e encontra todos os documentos, mas apenas exibe os campos "nome", "preco" e "detalhe" (sem o _id)
use('estudandoAula02')
db.receitas.find({},{nome:1, preco:1, detalhe:1,_id:0}) // O _id é excluído da exibição

// Acessa o banco de dados para listar todas as receitas novamente
use('estudandoAula02')
db.receitas.find() // Exibe todos os documentos na coleção "receitas"

// Insere um novo documento na coleção "receitas"
use('estudandoAula02')
db.receitas.insertOne({
    nome: "Hamburguer de Cogumelo", // Nome do novo hambúrguer a ser inserido
    preco: 45.99, // Preço do novo hambúrguer
    ingredientes: ["pão", "cogumelo", "queijo"], // Ingredientes do novo hambúrguer
    vegetariano: true, // Indica que o hambúrguer é vegetariano
    dataCadastro: new Date(), // Armazena a data de criação do documento
    detalhe: { // Detalhes adicionais sobre a receita
        "calorias": 700, // Número de calorias da receita
        "porcao": 1, // Porções que a receita serve
        "veggie": true // Indica se a receita é vegana
    }
})

// Acessa o banco de dados e busca especificamente o "Hamburguer de Cogumelo" para exibir
use('estudandoAula02')
db.receitas.find({nome: "Hamburguer de Cogumelo"},{_id:0}) // Retorna o documento sem o campo _id

// Acessa o banco de dados e busca todos os documentos, exibindo nome, _id (excluído) e ingredientes
use('estudandoAula02')
db.receitas.find({}, {nome:1, _id:0, preco:1, ingredientes:1}) // Exibe todos os hambúrgueres com seu nome e ingredientes, sem o _id

// Insere múltiplos documentos na coleção "receitas"
use('estudandoAula02')
db.receitas.insertMany([ // Método para inserir vários documentos de uma só vez
    {
        nome: "Hamburguer de Grão-de-Bico",
        preco: 38.90,
        ingredientes: ["pão integral", "grão-de-bico", "rúcula", "molho tahine"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 520,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Frango Grelhado",
        preco: 28.50,
        ingredientes: ["pão", "frango grelhado", "alface", "tomate", "maionese"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 850,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Peixe",
        preco: 33.00,
        ingredientes: ["pão", "filé de peixe", "alface", "molho tártaro"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 720,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Feijão Preto",
        preco: 29.90,
        ingredientes: ["pão integral", "feijão preto", "abacate", "tomate"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 640,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Pernil",
        preco: 36.00,
        ingredientes: ["pão", "pernil desfiado", "queijo prato", "picles"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1100,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Quinoa",
        preco: 42.00,
        ingredientes: ["pão integral", "quinoa", "cenoura ralada", "molho de iogurte"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 600,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Salmão",
        preco: 48.00,
        ingredientes: ["pão australiano", "salmão grelhado", "cream cheese", "cebolinha"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 850,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Lentilha",
        preco: 37.50,
        ingredientes: ["pão integral", "lentilha", "tomate seco", "rúcula"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 570,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Carne de Sol",
        preco: 40.00,
        ingredientes: ["pão", "carne de sol desfiada", "queijo coalho", "maionese de alho"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1300,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Vegetais",
        preco: 32.90,
        ingredientes: ["pão integral", "berinjela", "abobrinha", "pimentão", "hummus"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 480,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer Texano",
        preco: 46.00,
        ingredientes: ["pão", "bacon", "queijo cheddar", "molho barbecue", "cebola crispy"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1600,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Cordeiro",
        preco: 55.00,
        ingredientes: ["pão", "carne de cordeiro", "molho de hortelã", "alface"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1400,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer Caprese",
        preco: 41.50,
        ingredientes: ["pão italiano", "muçarela de búfala", "tomate", "manjericão", "pesto"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 620,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Picanha",
        preco: 52.00,
        ingredientes: ["pão", "picanha", "queijo prato", "bacon", "molho especial"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1700,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Falafel",
        preco: 39.90,
        ingredientes: ["pão pita", "falafel", "pepino", "molho tahine", "alface"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 550,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Shimeji",
        preco: 45.50,
        ingredientes: ["pão de gergelim", "shimeji", "cream cheese", "cebola caramelizada"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 680,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer Mineiro",
        preco: 44.00,
        ingredientes: ["pão de milho", "linguiça artesanal", "queijo minas", "geleia de pimenta"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1250,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer Árabe",
        preco: 35.50,
        ingredientes: ["pão sírio", "kafta", "molho de alho", "alface", "tomate"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 960,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Jaca",
        preco: 40.90,
        ingredientes: ["pão integral", "jaca desfiada", "alface", "tomate", "molho barbecue"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 510,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer Double Bacon",
        preco: 58.00,
        ingredientes: ["pão brioche", "dois hambúrgueres de carne", "dobro de bacon", "cheddar", "molho especial"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 2100,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Abóbora",
        preco: 36.50,
        ingredientes: ["pão integral", "abóbora assada", "rúcula", "molho de ervas"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 590,
            "porcao": 1,
            "veggie": true
        }
    },
    {
        nome: "Hamburguer de Carne Angus",
        preco: 60.00,
        ingredientes: ["pão", "carne angus", "bacon", "queijo cheddar", "molho chipotle"],
        vegetariano: false,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 1800,
            "porcao": 1,
            "veggie": false
        }
    },
    {
        nome: "Hamburguer de Espinafre",
        preco: 34.90,
        ingredientes: ["pão de espinafre", "hambúrguer de espinafre", "queijo branco", "tomate", "alface"],
        vegetariano: true,
        dataCadastro: new Date(),
        detalhe: {
            "calorias": 520,
            "porcao": 1,
            "veggie": true
        }
    }
])

// Conta quantas receitas contêm o ingrediente "pão" e exibe o total
use('estudandoAula02')
db.receitas.find({ingredientes: /pão/i},{nome:1, _id:0, ingredientes:1}).count() // Conta documentos com "pão" nos ingredientes

// Conta quantas receitas não contêm o ingrediente "pão" e exibe o total
use('estudandoAula02')
db.receitas.find({ingredientes: { $not: /pão/i}},{nome:1, _id:0, ingredientes:1}).count() // Conta documentos sem "pão" nos ingredientes

// Acessa o banco de dados e busca todas as receitas, exibindo nome e preço, ordenados pelo preço em ordem crescente
use('estudandoAula02')
db.receitas.find({}, {nome: 1, preco: 1}).sort({preco:1}) // Exibe receitas ordenadas pelo preço em ordem crescente

// Acessa o banco de dados e busca todas as receitas, exibindo nome e preço, ordenados pelo preço em ordem decrescente
use('estudandoAula02')
db.receitas.find({}, {nome: 1, preco: 1}).sort({preco:-1}).toArray() // Exibe receitas ordenadas pelo preço em ordem decrescente e converte para um array

// Conta as receitas que contêm queijo e têm preço entre 30 e 50, além de contar o total de receitas
use('estudandoAula02')
const qntComQueijo = db.receitas.countDocuments( // Conta documentos que atendem aos critérios especificados
    {
        $and: [
            {preco: {$lt: 50}}, // Preço menor que 50
            {preco: {$gt: 30}}, // Preço maior que 30
            {ingredientes: /queijo/i} // Contém "queijo" nos ingredientes
        ]
    }
);
const qntTotal = db.receitas.countDocuments(); // Conta total de receitas

// Calcula a quantidade de receitas sem queijo
const qntSemQueijo = qntTotal - qntComQueijo; // Total de receitas menos as que contêm queijo

// Retorna a quantidade de receitas sem queijo com preços entre 30 e 50
qntSemQueijo // Resultado final exibido no shell do MongoDB