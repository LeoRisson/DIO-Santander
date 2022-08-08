// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines = gets().split("\n");

let line = lines.shift().split(' ').map(Number).reduce((n1, n2) => n1 + n2);
//let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

//for(i=0;i < 6; i++){
//let transfor = parseInt(line[10])
//soma = soma + i
//}
print(line - 3)