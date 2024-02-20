// const buffer=Buffer.alloc(5);
// // console.log(buffer);
// buffer.write('Hello','utf-8');
// const data =buffer.toString('utf-8');
// console.log(data);
//concatenatiing
const b1=Buffer.from("Hello", "utf-8");
const b2=Buffer.from(" World", "utf-8");
const concatenatedBuffer=Buffer.concat([b1,b2]);
console.log(concatenatedBuffer.toString('utf-8'));