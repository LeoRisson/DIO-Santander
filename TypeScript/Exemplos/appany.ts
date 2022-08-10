let valorany: any;
valorany = 3;
valorany = 'ola';
valorany = true;

let valorString: string = 'triste';
valorString = valorany;
let valorString2: string = 'testao';
valorString2 = valorString;

function somastring(string1:string, string2:string){
    console.log( string1 + string2);
}

somastring(valorString, valorString2);
somastring('ola ', 'mundo velho!')
