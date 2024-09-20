// Função tradicional: pode ser declarada assim
// function nome_da_funcao(parametro1, parametro2){    
// }

// Outra maneira de declarar uma função usando arrow function
// const nome_da_funcao = (parametro1, parametro2) => {
// }

// DECLARAR UM OBJETO

// Criação de um objeto 'departament' com duas propriedades: 'id' e 'name'.
// O objeto representa o departamento de uma empresa.
const departament = {
    id: 1, // id do departamento (tipo number)
    name: "vendas" // nome do departamento (tipo string)
}

// Criação de objetos 'person_a' até 'person_z' que representam pessoas
const person_a = {
    id: 1, // id da pessoa (tipo number)
    nome: "João", // nome da pessoa (tipo string)
    age: 17, // idade da pessoa (tipo number)
    salary: 2100, // salário da pessoa (tipo number)
    department: departament // departamento ao qual a pessoa pertence (tipo objeto)
}

const person_b = {
    id: 2, // id da pessoa (tipo number)
    nome: "Pedro", // nome da pessoa (tipo string)
    age: 25, // idade da pessoa (tipo number)
    salary: 2100, // salário da pessoa (tipo number)
    department: departament // departamento ao qual a pessoa pertence (tipo objeto)
}

const person_c = {
    id: 3,
    nome: "Carlos",
    age: 30,
    salary: 2500,
    department: departament
}

const person_d = {
    id: 4,
    nome: "Daniela",
    age: 22,
    salary: 2200,
    department: departament
}

const person_e = {
    id: 5,
    nome: "Eduardo",
    age: 27,
    salary: 2400,
    department: departament
}

const person_f = {
    id: 6,
    nome: "Fernanda",
    age: 29,
    salary: 2300,
    department: departament
}

const person_g = {
    id: 7,
    nome: "Gabriel",
    age: 26,
    salary: 2600,
    department: departament
}

const person_h = {
    id: 8,
    nome: "Helena",
    age: 31,
    salary: 2700,
    department: departament
}

const person_i = {
    id: 9,
    nome: "Igor",
    age: 24,
    salary: 2150,
    department: departament
}

const person_j = {
    id: 10,
    nome: "Julia",
    age: 28,
    salary: 2800,
    department: departament
}

const person_k = {
    id: 11,
    nome: "Karen",
    age: 32,
    salary: 3000,
    department: departament
}

const person_l = {
    id: 12,
    nome: "Lucas",
    age: 35,
    salary: 3200,
    department: departament
}

const person_m = {
    id: 13,
    nome: "Mariana",
    age: 34,
    salary: 3100,
    department: departament
}

const person_n = {
    id: 14,
    nome: "Natália",
    age: 27,
    salary: 2900,
    department: departament
}

const person_o = {
    id: 15,
    nome: "Otávio",
    age: 33,
    salary: 3300,
    department: departament
}

const person_p = {
    id: 16,
    nome: "Paulo",
    age: 29,
    salary: 2700,
    department: departament
}

const person_q = {
    id: 17,
    nome: "Quésia",
    age: 23,
    salary: 2200,
    department: departament
}

const person_r = {
    id: 18,
    nome: "Renata",
    age: 30,
    salary: 2800,
    department: departament
}

const person_s = {
    id: 19,
    nome: "Silvio",
    age: 36,
    salary: 3400,
    department: departament
}

const person_t = {
    id: 20,
    nome: "Tatiana",
    age: 27,
    salary: 2500,
    department: departament
}

const person_u = {
    id: 21,
    nome: "Ulysses",
    age: 29,
    salary: 2900,
    department: departament
}

const person_v = {
    id: 22,
    nome: "Vanessa",
    age: 31,
    salary: 2600,
    department: departament
}

const person_w = {
    id: 23,
    nome: "Wagner",
    age: 33,
    salary: 3200,
    department: departament
}

const person_x = {
    id: 24,
    nome: "Xênia",
    age: 26,
    salary: 3000,
    department: departament
}

const person_y = {
    id: 25,
    nome: "Yara",
    age: 28,
    salary: 3100,
    department: departament
}

const person_z = {
    id: 26,
    nome: "Zeca",
    age: 35,
    salary: 3500,
    department: departament
}

// Criação de um array 'people' que contém as duas pessoas, 'person_a' e 'person_b'.
// Esse array será usado para listar todas as pessoas.
const people = [person_a, person_b, person_c, person_d, person_e, person_f, person_g, person_h, person_i, person_j,
    person_k, person_l, person_m, person_n, person_o, person_p, person_q, person_r, person_s, person_t,
    person_u, person_v, person_w, person_x, person_y, person_z];

// 1ª Forma: Desestruturação no parâmetro da função.
// Declaração de uma função chamada 'printPerson' que recebe um objeto como parâmetro e
// já desestrutura as propriedades nome, age, salary e department diretamente no parâmetro.
// Isso significa que dentro da função, podemos usar diretamente as variáveis 'nome', 'age', 'salary' e 'department'
// sem precisar referenciar o objeto 'pPerson' a cada vez.
const printPerson = ({nome, age, salary, department}) => 
    // Usando template literals para montar uma string que exibe o nome, idade, salário e nome do departamento da pessoa.
    // Acessamos as variáveis desestruturadas diretamente.
    console.log(`Nome: ${nome}, Idade: ${age}, Salário: ${salary}, Departamento: ${department.name}`);
    // Note que estamos acessando 'department.name' diretamente porque 'department' também foi desestruturado.

// 2ª Forma: Desestruturação dentro do corpo da função (comentado).
// Podemos também receber o objeto 'pPerson' como parâmetro e desestruturar as propriedades dentro da função.
// Isso faz o mesmo trabalho, mas a desestruturação ocorre dentro do escopo da função.
// Veja o código comentado abaixo:
/*
const printPerson = (pPerson) => {
    // Desestruturamos o objeto dentro do corpo da função.
    const {nome, age, salary, department} = pPerson;
    
    // Usando template literals para montar a string.
    console.log(`Nome: ${nome}, Idade: ${age}, Salário: ${salary}, Departamento: ${department.name}`);
}
*/

// Declaração de uma função chamada 'printPeople' que recebe um array de pessoas como parâmetro ('pPeople').
// A função percorre o array e chama a função 'printPerson' para cada pessoa no array.
//const printPeople = (pPeople=[]) => {
  //  pPeople.forEach((p) => {
    //    printPerson(p);
    //})
    // Imprime o array inteiro de pessoas no console para visualização.
    //console.log(pPeople);
    
    // Loop 'for' para percorrer o array 'pPeople'.
    // A variável 'n' começa em 0 e vai até o tamanho total do array, incrementando de 1 em 1.
    //for (n in pPeople){
      //  printPerson(pPeople[n]);
    //}
    /*for (let n = 0; n < pPeople.length; n++) {
        // Para cada iteração, a função 'printPerson' é chamada com o elemento atual do array (pPeople[n]).
        printPerson(pPeople[n]);
    }*/
//}
//const printPeople = (pPeople=[]) => {
//    pPeople.forEach(callPrintPerson);
//};

// Chama a função 'printPeople', passando o array 'people' como argumento.
// Isso iniciará a impressão dos dados de cada pessoa contida no array.
//printPeople(people);

const findOlderThanAge = (pPeople = [], age = 0) => 
    pPeople.filter((p) =>  p.age > age);   


const findById = (pPeople = [], id) =>
    pPeople.find((p) =>p.id === id);

const result1 = findOlderThanAge(people, 33);

const result2 = findById(people, 2);


//console.log(result1);

//console.log(result2);

const getSalary = (pPeople = []) => {
    return pPeople.map((p) => {
        return p.salary;
    })
}

const result3 = getSalary(people);

//console.log(result3);

const reajustSalaries = (pPeople = [], factor=1) => {
    return pPeople.map(({id, nome, age, salary}) => {
        return {
            id,
            nome,
            age,
            salary: salary * factor
        }
    })
}
const result4 = reajustSalaries(people, 1.05);
console.log(result4)