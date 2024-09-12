// Declaração da variável 'exemploVariavel' com o tipo de união (string | number)
// Isso significa que a variável pode armazenar tanto valores do tipo string quanto do tipo number.
let exemploVariavel: (string | number);

// Atribuição de um valor numérico (number) à variável 'exemploVariavel'.
// Como a variável permite o tipo number, essa operação é válida.
exemploVariavel = 123;

// Exibe o valor atual de 'exemploVariavel' no console.
// Como o valor atribuído é um número, o console vai exibir: 123
console.log(exemploVariavel);

// Agora, atribui-se um valor do tipo string à variável 'exemploVariavel'.
// A variável aceita tanto string quanto number, então essa atribuição também é válida.
exemploVariavel = "ABC";

// Exibe o valor atualizado de 'exemploVariavel' no console.
// Como o valor atual é uma string, o console vai exibir: "ABC"
console.log(exemploVariavel);
