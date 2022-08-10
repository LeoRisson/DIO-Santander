const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome:string, idade:number, profissao:string}={
    nome: "Andre",
    idade:25,
    profissao: 'desenvolvedor'
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: "Payla",
    idade: 25,
    profissao: 'Dev'
}

enum profissao{
    Professora,
    Atriz,
    desenvolvedora,
    JogadoradeFutebol,
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: profissao,
}

const vanessa: Pessoa ={
    nome: 'Vanessa',
    idade:23,
    profissao: profissao.Atriz
}
const maria: Pessoa ={
    nome: 'Maria',
    idade:23,
    profissao: profissao.JogadoradeFutebol
}
interface Estudante extends Pessoa{
    materias: string [],
}

const jessica: Estudante = {
    nome:'jessica',
    idade: 23,
    profissao: profissao.desenvolvedora,
    materias: ['culinaria', 'logica', 'C++']
}
const jaqueline: Estudante = {
    nome: 'jaqueline',
    idade: 26,
    materias: ['culinaria', 'logica', 'C++']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    } 
}

listar(jaqueline.materias)