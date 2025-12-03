const array = [];

console.log(array);

array.push(1);


console.log(array);


// object mutation:

const obj = {}
const obj2 = obj;

console.log(obj);

obj.sample = 'value';


console.log(obj);

console.log(obj2);

// PROBLEM:
console.log(obj === obj2);
// nie widzę że jest zmiana, bo to ten sam obiekt!

// ------------------------------------------------------------
// PODEJŚCIE REACTa:
const obj3 = {}
const obj4 = {...obj3};
// const obj4 = Object.assign({}, obj3);

console.log(obj3);
obj3.sample = 'value';

// ROZWIĄZANIE:
console.log(obj3 === obj4);

console.log(obj3)
console.log(obj4)