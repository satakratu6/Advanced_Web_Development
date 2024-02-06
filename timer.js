//setTimeout
// const delayedFunction =() => {
//     console.log('Delayed Function executed!');
// }
// setTimeout(delayedFunction,2000);   //executes after 2 seconds

//setInterval
// const repeatedFunction = () =>{
//     console.log('Repeat function executed');
// }
// const intervalid=setInterval(repeatedFunction,1000) //Executes every 1 second
//clearInterval
//function to be executed at intervals
function repeatedFunction(){
    console.log('Executing repeated fucntion..');
}
//set an interval (execute repeatedFunction every 1000 milliseconds)
const intervalid=setInterval(repeatedFunction,1000);
//after some time (e.g., 5000 milliseconds), stop the interval
setTimeout(() => {
    clearInterval(intervalid); //stop the interval
    console.log('Interval stopped');
}, 5000);