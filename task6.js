// Refer to Task 6 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const numMax = +prompt("Ingresa el numero de lineas a generar: ");
const arrayFizz = [];
const arrayNums = [];

for (let i = 1; i <= numMax; i++) {
    let output = "";

    if (i%3===0 && i%5===0 && i%7===0) {
        output = "FizzBuzzWoof";
    }
    else if (i%3===0 && i%5===0) {
        output = "FizzBuzz";
    }
    else if (i%3===0 && i%7===0) {
        output = "FizzWoof";
    }
    else if (i%5===0 && i%7===0) {
        output = "BuzzWoof";
    }
    else if (i%3===0) {
        output = "Fizz";
    }
    else if (i%5===0) {
        output = "Buzz";
    }
    else if (i%7===0) {
        output = "Woof";
    }
    else {
        output = i.toString();
    }

    arrayFizz.push(output); //por si se quiere guardar con fizz, buzz y woof
    arrayNums.push(i);     // por si se quiere guardar los numeros generados

    console.log(output);
    
}
console.log(arrayNums);
console.log(arrayFizz);
