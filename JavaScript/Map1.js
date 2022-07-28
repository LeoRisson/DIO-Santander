//ComThis
const maca ={
    value: 2,
};
const laranja ={
    value: 3,
};


function mapComThis(arr,thisArg){
    return arr.map(function (item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log ('this -> maçã', mapComThis(nums, maca));

console.log ('this -> laranja', mapComThis(nums, laranja));

//Sem This
function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    });
}

const num = [2, 4, 6, 8, 10, 12];

console.log('Sem this ->', mapSemThis(num));
console.log('arr original ->',num);