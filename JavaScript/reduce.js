//Reduce #1
function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [0, 1, 1, 3, 5, 8, 13];

console.log('reduce ->', somaNumeros(arr));

//Reduce #2
/*
const list =[
    {
    name:'Pilsen',
    preco: 12,
    },
    {
    name:'IPA',
    preco: 17,
    },
    {
    name:'RED',
    preco: 15,
    },
    {
    name:'NEIPA',
    preco: 19,
    },
];

const saldoDisponivel = 80;

function calculaSaldo(saldoDisponivel, items) {
    return items.reduce (function (prev, current, index){
        console.log('rodada ->', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    },
     saldoDisponivel);
}

console.log(calculaSaldo('Quanto me Sobra?=>',saldoDisponivel, list));
*/