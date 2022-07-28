function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
    {
        name: 'Pilsen',
        preco: 12,
    },
    {
        name: 'IPA',
        preco: 17,
    },
    {
        name: 'RED',
        preco: 15,
    },
    {
        name: 'NEIPA',
        preco: 19,
    },
];

saldo = 80;

console.log(calculaSaldo(saldo, lista));