// Refer to Task 6 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const numMax = prompt("Ingresa el numero de lineas a generar: ");

for (let i = 1; i <= numMax; i++) {
  //let array =[]
  //let arrayNumGen = []
  //arrayNumGen += array.push(i);
      if (i%3===0 && i%5===0 && i%7===0){
        console.log("FizzBuzzWoof");
        }
      else if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
        }
      else if (i%3===0 && i%7===0){
        console.log("FizzWoof");
        }
      else if (i%5===0 && i%7===0){
        console.log("BuzzWoof");
        }
      else if(i%3===0){
        console.log("Fizz");
      }
      else if(i%5===0){
        console.log("Buzz");
      }
      else if(i%7===0){
        console.log("Woof");
      }
      else{
        console.log(i);
      }
     //console.log(arrayNumGen);
}  
 