/*function greet(person, callback) {
  console.log(`Hello, ${person.name}!`);
  callback(person);
}

function showDetails(person) {
  console.log(`You are ${person.age} years old.`);
}

const person = { name: "Alice", age: 25 };

greet(person, showDetails);*/

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 21

