// const EvenEmitter=require('events');
// const myEmitter=new EvenEmitter();

// const eventHandlar=(arg1,arg2)=>{
//     console.log('Event occured with arguments:',arg1,arg2);
    
// }
// myEmitter.on('firstevent',eventHandlar);

// for(var i=0;i<5;i++){
//     if(i==2){
//         myEmitter.removeListener('firstevent',eventHandlar);
//     }
//     myEmitter.emit('firstevent','Hello','Hi');
// }
// myEmitter.emit('firstevent','hello','hi');
const EvenEmitter=require('events');
const myEmitter=new EvenEmitter();

const eventHandlar=(arg1,arg2)=>{
    console.log('Event occured with arguments:',arg1,arg2);
    
}
myEmitter.on('firstevent',eventHandlar);

for(var i=0;i<4;i++){
    myEmitter.emit('firstevent','Hello','Hi');

    if(i==2){
        myEmitter.removeAllListeners('firstevent');
    }
}
