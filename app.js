const q=require('lodash');
// const numbers=[1,2,3,4,5];
// const doubleNumbers=q.map(numbers, n=>n*2);
// console.log('Original numbers: ',numbers);
// console.log('Doubled numbers: ', doubleNumbers);
const a=require ('./add.js')
let p=a.add(2,4);
let t=a.subtract(4,2);
console.log(p);
console.log(t);