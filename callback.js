//Synchronous callback function example
// function parentFunction(name, callabck){
//     callabck();
//     console.log("Hey "+name);


// }
// function randomFunction(){
//     console.log("Hey I am call back function");
// }
// parentFunction("Random String", randomFunction);
//asynchronous function
// function parentFunction(name, callabck){
//     setTimeout(callabck,1000);
//     console.log("Hey "+name);


// }

// parentFunction("Random String", function(){
//     console.log("Hey, I am a callback function"); //using anonymous function
// });

// const parentFunction=(name, callabck)=>{ //using arrow function
//     setTimeout(callabck,1000);
//     console.log("Hey "+name);


// }

// parentFunction("Random String", function(){
//     console.log("Hey, I am a callback function"); 
// });
//More shorter
const parentFunction= (name, callback) =>
(setTimeout(callback, 1000), console.log("Hey, "+name));
parentFunction("Random string", () =>console.log("Hey, I am a callback function"));