const pessoa ={
    fristname: "Leo",
    lastName: "Getz",
    id      : 1,
    fullname: function(){
        return this.fristname + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

console.log (pessoa.fullname());

console.log (pessoa.getId());

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1={
    nome: "Maria",
    idade: 65,
};
const pessoa2={
    nome: "Gaby",
    idade: 10,
};
const pessoa3={
    nome: "Tinado",
    idade: 43,
};

console.log (calculaIdade.call(pessoa1, 20));
console.log (calculaIdade.apply(pessoa2, [15]));
console.log (calculaIdade.apply(pessoa3, [15]));