// const EvenEmitter=require('events');
// const myEmitter=new EvenEmitter();
// myEmitter.on('firstevent',(arg1, arg2)=>{
//     console.log('Event occured with arguments:',arg1,arg2);
// });
// myEmitter.emit('firstevent','hi','hello');
// myEmitter.emit('firstevent','hello','hi');
const EvenEmitter=require('events');
const myEmitter=new EvenEmitter();
myEmitter.on('firstevent',(arg1, arg2)=>{
    console.log('Event occured with arguments:',arg1,arg2);
});
myEmitter.once('firstevent',(arg1, arg2)=>{
    console.log('This listener will be executed only once');
});
// myEmitter.emit('firstevent','hi','hello');
for(var i=0;i<=3;i++){
    myEmitter.emit('firstevent','Hello','Hi');
}
