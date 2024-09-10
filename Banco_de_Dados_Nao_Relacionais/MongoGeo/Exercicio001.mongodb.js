// 01 - Criação da coleção "funcionarios" e inserção de documentos
use('exercicio')
db.funcionarios.insertMany([
    {
        nome: "Clark Kent",
        cargo: "Fotografo",
        salario: 2000,
        sexo: "Masculino",
        departamento: "Noticias",
        dataContratacao: new Date("2015-03-01"),
        projetos: ["Super-heroi", "Fotografo", "Fantasia"],
        dataCadastro: new Date("2015-03-02")
    },
    {
        nome: "Bruce Wayne",
        cargo: "Herdeiro",
        salario: 100000000,
        sexo: "Masculino",
        departamento: "Espionagem",
        dataContratacao: new Date("2012-05-09"),
        projetos: ["Super-heroi", "Inteligencia", "Fantasia"],
        dataCadastro: new Date("2012-05-10")
    },
    {
        nome: "Diana Prince",
        cargo: "Amazonas",
        salario: 23000,
        sexo: "Feminino",
        departamento: "Guerreira",
        dataContratacao: new Date("2013-02-22"),
        projetos: ["Super-heroi", "Fantasia"],
        dataCadastro: new Date("2013-02-23")
    }
    // Adicione pelo menos mais 3 funcionários aqui para completar o exercício
])

// Verifique a inserção dos documentos
use('exercicio')
db.funcionarios.find()


// 02 - Inserção de um novo funcionário usando insertOne
use('exercicio')
db.funcionarios.insertOne({
    nome: "Barry Allen",
    cargo: "Policial Forence",
    salario: 18000,
    sexo: "Masculino",
    departamento: "Laboratorio",
    dataContratacao: new Date("2018-10-27"),
    projetos: ["Super-heroi", "Fantasia", "Viagem no tempo"],
    dataCadastro: new Date("2018-10-28")
})


// 03 - Aumento do salário de todos os funcionários em R$ 100
use('exercicio')
db.funcionarios.updateMany({}, {
    $inc: { "salario": 100 } // Aumenta o salário de todos os funcionários em R$ 100
})
use('exercicio')
db.funcionarios.find({}, { nome: 1, salario: 1 }) // Verifique a alteração nos salários


// 04 - Adição do projeto "Projeto C" à lista de projetos do funcionário "Diana Prince"
use('exercicio')
db.funcionarios.updateOne(
    { nome: "Diana Prince" },
    { $push: { projetos: 'Projeto C' } } // Adiciona "Projeto C" ao array de projetos
)

use('exercicio')
db.funcionarios.find({ nome: "Diana Prince" }, { nome: 1, projetos: 1 }) // Verifique a atualização no array de projetos


// 05 - Remoção do campo "dataContratacao" de todos os funcionários
use('exercicio')
db.funcionarios.updateMany({}, { $unset: { dataContratacao: '' } }) // Remove o campo "dataContratacao" de todos os documentos

use('exercicio')
db.funcionarios.find() // Verifique que o campo foi removido


// 06 - Criação de um novo campo "bonificacao" e atribuição do valor 500 para todos os funcionários do departamento "Noticias"
use('exercicio')
db.funcionarios.updateMany({}, { $set: { bonificacao: '' } }) // Inicializa o campo "bonificacao" para todos os documentos

use('exercicio')
db.funcionarios.updateMany(
    { departamento: "Noticias" },
    { $set: { bonificacao: 500 } } // Define bonificação de 500 para funcionários do departamento "Noticias"
)

use('exercicio')
db.funcionarios.find({}, { nome: 1, bonificacao: 1 }) // Verifique a adição do campo bonificação


// 07 - Remoção do registro do funcionário com o nome "Diana Prince"
use('exercicio')
db.funcionarios.deleteOne({ nome: "Diana Prince" }) // Remove um único documento onde o nome é "Diana Prince"


// 08 - Remoção de todos os registros dos funcionários do departamento "Contabilidade"
use('exercicio')
db.funcionarios.deleteMany({ departamento: "Contabilidade" }) // Remove todos os documentos onde o departamento é "Contabilidade"


// 09 - Mostrar o nome, sexo e salário de todos os funcionários do departamento "Noticias"
use('exercicio')
db.funcionarios.find({ departamento: "Noticias" }, { _id: 0, nome: 1, sexo: 1, salario: 1 }) // Filtra e mostra os campos desejados


// 10 - Encontrar funcionários com salário maior que 40000
use('exercicio')
db.funcionarios.find({ salario: { $gt: 40000 } }, { nome: 1, salario: 1 }) // Filtra funcionários com salário maior que 40.000


// Adicionando um funcionário para o exercício 11
use('exercicio')
db.funcionarios.insertOne({
    nome: "Oliver Queen",
    cargo: "Empresario",
    salario: 45000,
    sexo: "Masculino",
    departamento: "Liquides de ativos",
    dataContratacao: new Date("2015-03-01"),
    projetos: ["Super-heroi", "Empreendedorismo", "Fantasia"],
    dataCadastro: new Date("2023-03-02")
})


// 11 - Encontrar funcionários contratados em 2023
use('exercicio')
db.funcionarios.find({
    dataContratacao: {
        $gte: new Date('2023-01-01'), // A partir de 1º de janeiro de 2023
        $lte: new Date('2023-12-31') // Até 31 de dezembro de 2023
    }
})


// 12 - Encontrar funcionários que trabalham no "Projeto A" ou no "Projeto B"
use('exercicio')
db.funcionarios.find({
    $or: [
        { projetos: "Projeto A" },
        { projetos: "Projeto B" }
    ]
})


// 13 - Encontrar funcionários que não trabalham no "Projeto B"
use('exercicio')
db.funcionarios.find({
    projetos: { $nin: ["Projeto B"] } // Funcionários que não têm "Projeto B" em seus projetos
})


// 14 - Mostrar o nome, salário e departamento dos funcionários do sexo feminino
use('exercicio')
db.funcionarios.find({
    sexo: "Feminino"
}, {
    _id: 0,
    nome: 1,
    salario: 1,
    departamento: 1
}) // Filtra e mostra apenas os funcionários do sexo feminino com nome, salário e departamento


// 15 - Encontrar funcionários contratados antes de 2023 e com salário menor que 5000
use('exercicio')
db.funcionarios.find({
    dataContratacao: { $lt: new Date('2023-01-01') }, // Antes de 1º de janeiro de 2023
    salario: { $lt: 5000 } // Salário menor que 5000
}, {
    _id: 0,
    nome: 1,
    dataContratacao: 1,
    salario: 1
})


// 16 - Encontrar funcionários que trabalham em mais de um projeto
use('exercicio')
db.funcionarios.find({
    $expr: {
        $gt: [{ $size: "$projetos" }, 1] // Verifica se o array de projetos tem mais de um item
    }
})
