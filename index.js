//Reverse a String function

// function reverseStr(string) {
//   reversed = string.split("").reverse().join("");
//   return reversed;
// }
// console.log(reverseStr("Hello World"));

//count characters:

// function countXter(count) {
//   let xter = count.split(""); // Split string into an array of characters
//   let result = [];
//   for (let i = 0; i < xter.length; i++) {
//     result.push(xter[i]); // Collect each character into the result array
//   }
//   return result; // Return the array of characters
// }
// console.log(countXter("you"));

// function capitalize(word) {
//   capital = word.toUpperCase();
//   return capital;
// }
// console.log(capitalize("word"));

//array functions

// function minAndMax(array) {
//   if (array.length === 0) {
//     return undefined;
//   }

//   let max = array[0];
//   let min = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }

//   return { min: min, max: max };
// }

// console.log(minAndMax([1, 2, 3, 4, 5]));

// function sum(array) {
//   let add = 0;
//   for (let i = 0; i < array.length; i++) {
//     add += array[i];
//   }
//   return add;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// function filterArray(array, condition) {
//   return array.filter(condition);
// }
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = filterArray(numbers, (num) => num >= 3);
// console.log(filteredNumbers);

// const strings = ["apple", "pear", "banana", "kiwi"];
// const filteredStrings = filterArray(strings, (str) => str.length >= 5);
// console.log(filteredStrings);

// factorial

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(4));

//Prime number check

// function primeNumber(num) {
//   if (num <= 1) {
//     return "Not a prime number";
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return "Not a prime number";
//     }
//   }

//   return "Prime number";
// }

// console.log(primeNumber(7));

//fibonacci sequence

// function generateFibonacci(num) {
//   let fibSequence = [];

//   if (num <= 0) return fibSequence;

//   fibSequence.push(0);
//   if (num === 1) return fibSequence;

//   fibSequence.push(1);
//   if (num === 2) return fibSequence;

//   for (let i = 2; i < num; i++) {
//     fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//   }

//   return fibSequence;
// }

// // Example usage:
// const numTerms = 10; // Change this value to generate more or fewer terms
// const fibonacciSequence = generateFibonacci(numTerms);
// console.log(fibonacciSequence);
