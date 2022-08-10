"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: 'desenvolvedor'
};
const paula = {
    nome: "Payla",
    idade: 25,
    profissao: 'Dev'
};
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["desenvolvedora"] = 2] = "desenvolvedora";
    profissao[profissao["JogadoradeFutebol"] = 3] = "JogadoradeFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.Atriz
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: profissao.JogadoradeFutebol
};
const jessica = {
    nome: 'jessica',
    idade: 23,
    profissao: profissao.desenvolvedora,
    materias: ['culinaria', 'logica', 'C++']
};
const jaqueline = {
    nome: 'jaqueline',
    idade: 26,
    materias: ['culinaria', 'logica', 'C++']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jaqueline.materias);
