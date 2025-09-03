// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Rosa",
    "Tulipan",
    "Girasol",
  ];
  
const prompt = require("prompt-sync")();
const numMax = +prompt("Ingresa el numero de lineas a generar: ");

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

    output = output.replaceAll("Fizz", buzzWords[0]).replaceAll("Buzz", buzzWords[1]).replaceAll("Woof", buzzWords[2]);

    console.log(output);
}
