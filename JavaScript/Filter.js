function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 ===0;
}

const meuArray = [1,23,55,67,30,2,4,48,55,67,90];

console.log('Mostra Pares ->',filtraPares(meuArray));
console.log('Mostra Arrey ->',(meuArray));
