use('exercicio')
db.funcionarios.find({},{nome:1, cargo:1, salario:1, projetos: 1, _id:0 })
use('exercicio')
db.funcionarios.find()
use('exercicio')
db.funcionarios.insertOne({
    nome: "Luciana Gomes",
    cargo: "Desenvolvedor",
    sexo: "Femininio",
    salario: 4500,
    departamento: "TI",
    dataContratacao: new Date("2023-01-01"),
    dataCadastro: new Date()
    })
//03
use('exercicio')
db.funcionarios.updateMany(
    {"cargo": "Desenvolvedor"},
    {$inc: {salario: 100}}
)
//04
use('exercicio')
db.funcionarios.updateOne(
    {nome: "João Silva"},
    {$push: {projetos: "Projeto C"}}
)
//05
use('exercicio')
db.funcionarios.updateMany({},
    {$unset: {dataContratacao: ""}}
)
//06
use('exercicio')
db.funcionarios.updateMany({departamento: "TI"},
    {$set: {bonificacao: 500}})
//07
use('exercicio')
db.funcionarios.deleteOne({nome: "João Silva"})

//08
use('exercicio')
db.funcionarios.deleteMany({departamento: "Contabilidade"})

//09
use('exercicio')
db.funcionarios.find({cargo: "Desenvolvedor"},{nome:1, sexo:1, salario:1})    

//10
use('exercicio')
db.funcionarios.find({salario: {$gt: 4000}})

//11
use('exercicio')
db.funcionarios.find({dataContratacao: {$gte: new Date('2023-01-01'),
                                        $lte: new Date('2023-12-31')
}})

//12
use('exercicio')
db.funcionarios.find({projetos: {$in: ["Projeto A", "Projeto B"]}})
//13
use('exercicio')
db.funcionarios.find({projetos: {$ne: "Projeto B"}})
//14
use('exercicio')
db.funcionarios.find({sexo: {$eq: "Feminino"}},{nome:1, salario:1, departamento:1, sexo:1})
//15
use('exercicio')
db.funcionarios.find({dataContratacao: {$lt: new Date('2023-01-01')}, 
                      salario: {$lt: 5000}})
//16 -- Prof. irá verificar
use('exercicio')
db.funcionarios.find({projetos: {$size: {$gt: 1}}})

//17
use('exercicio')
db.funcionarios.find({dataCadastro: {$gte: new Date(new Date().getTime()-
                                    30 * 24 * 60 * 60 * 1000)}})
//18
use('exercicio')
db.funcionarios.find({nome: /^João/i}) //^ que começa

//19
use('exercicio')
db.funcionarios.find({nome: /Silva$/i}) //$ que começa

//20 Luiz ou Luis
use('exercicio')
db.funcionarios.find({nome: /Lui[sz]/i})

//21
use('exercicio')
db.funcionarios.find({
    $and:[
    {cargo: "Desenvolvedor"},
    {departamento: "TI"},
    {salario: {$gt: 4500}}
    ]
})
//22
use('exercicio')
db.funcionarios.find({
    $and: [
        {cargo: {$ne: "Desenvolvedor"}},
        {dataContratacao: {$gte: new Date('2023-01-01'), 
                           $lte: new Date('2023-12-31')}}
    ]})
//23
use('exercicio')
db.funcionarios.find({
    $and: [
        {projetos: {$in: ['Projeto A', 'Projeto B']}},
        {salario: {$lte: 5000}}
    ]})
//24
use('exercicio')
db.funcionarios.find({
    $and: [
        {departamento: {$ne: "TI"}},
        {projetos: {$nin: ["Projeto A"]}}
    ]})
//25
use('exercicio')
db.funcionarios.find({
    $or: [
        {dataContratacao: { $lt: new Date('2023-01-01')}},
        {sexo: {$eq: "Feminino"}}
    ]})
//26
use('exercicio')
db.funcionarios.find({
    $and: [
        {salario: {$gt: 4000}},
        {dataContratacao: { $gte: new Date('2023-01-01')}},
        {$or: [
            {cargo: "Desenvolvedor"},
            {cargo: "Analista"}
        ]}
    ]})