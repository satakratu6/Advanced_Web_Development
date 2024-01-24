// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }
// let count=0;
// while(count<5){
//     console.log(count);
//     count++;
// }
// let count=0;
// do{
//     console.log(count);
//     count++;
// } while (count<5);
// let person = {
//     name: "John",
//     age:18,
//     occupation: "Developer"
// };
// for(let key in person){
//     console.log(key+": "+person[key]);
// }

//object literal notation
// let car={
//     make:"Toyota",
//     make1: "Camry",
//     year: 2022,
//     isElectric: false,
//     start: function() {
        
//         console.log("Engine started!");
    
//     }
    
// };
// car.start(); //calling method
// console.log(car.make); //accessing properties
// console.log(car.year);

// //object constructor function
// function Book(title, author, year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }

// //creating instances of the object
// let book1= new Book("The catcher in the eye", "J.D Salinger", 1951);
// let book2= new Book("Harry Potter and the Philosopher's Stone", "J.K Rowing", 1990); 
// console.log(book1);
// console.log(book2);
// console.log(book1.author);
// console.log(book2.author);
//array
// let fruits=["apple","banana","orange","grape"];
// console.log(fruits);
// fruits.push("kiwi"); //add elemets to end 
// console.log(fruits);
// fruits.unshift("mango"); //Adding elements to the beginning
// console.log(fruits);
// let removedLast=fruits.pop(); //removing the last element
// let removedFirst=fruits.shift(); //removing the first element
// console.log(fruits);
// let indexOfOrange=fruits.indexOf("orange");
// console.log(indexOfOrange);
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }
// let citrus=fruits.slice(1,3);
// console.log(citrus);
// let removed=fruits.splice(1,2, "pear", "melon"); //modifying an array
// let moreFruits=["grapefruit", "pineapple"]; //concatenating array
// let allFruits=fruits.concat(moreFruits);

// console.log(allFruits);
// console.log(removed);
// console.log(moreFruits);

