//object to json format
// const dataObject={
//     name:'John',
//     age: 30,
//     city: 'New York'
// };
// const jsonString=JSON.stringify(dataObject);
// console.log(jsonString);
// decoding from JSON
const jsonString='{"name":"john","age":30,"city":"New York"}';
const dataObject=JSON.parse(jsonString);
console.log(dataObject);