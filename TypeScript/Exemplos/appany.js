"use strict";
let valorany;
valorany = 3;
valorany = 'ola';
valorany = true;
let valorString = 'triste';
valorString = valorany;
let valorString2 = 'testao';
valorString2 = valorString;
function somastring(string1, string2) {
    console.log(string1 + string2);
}
somastring(valorString, valorString2);
somastring('ola ', 'mundo velho!');
