const alunos =[
    {
        nome: 'Gaby',
        nota: 8,
        turma: '4A',
    },
    {
        nome: 'Tinado',
        nota: 9,
        turma: '4C',
    },
    {
        nome: 'TiBruno',
        nota: 6,
        turma: '5D',
    },
    {
        nome: 'CeciliaV',
        nota: 3,
        turma: '4C',
    },
    {
        nome: 'Maju',
        nota: 7,
        turma: '4A',
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];
    let Reprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if (nota >=media) {
            aprovados.push(nome);
        }
}
return aprovados;
}

function alunosReprovados(arr, media){
    let reprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if (nota <= media) {
            reprovados.push(nome);
        }
}
return reprovados;
}

console.log('Alunos Aprovados: ' + alunosAprovados(alunos, 6));
console.log('Alunos Reprovados: ' + alunosReprovados(alunos, 5));
