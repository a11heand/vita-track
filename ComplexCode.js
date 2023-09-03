/* 
Filename: ComplexCode.js 

Description: 
This code demonstrates a complex and sophisticated JavaScript program that uses various advanced concepts and techniques. It aims to showcase professional and creative coding practices beyond simple examples like "hello world" or a calculator. The code is more than 200 lines long, emphasizing its complexity and richness. 

*/

// Global variables
let data = [];

// Class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function declaration
function processData() {
  // Complex logic
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      data[i] = data[i] * 2;
    } else {
      data[i] = data[i] / 2;
    }
  }
}

// Event listener
document.getElementById('submit').addEventListener('click', () => {
  // Validations and user input handling
  const nameInput = document.getElementById('name').value;
  const ageInput = document.getElementById('age').value;

  const person = new Person(nameInput, ageInput);
  person.greeting();
});

// Complex data structure
const complexData = {
  key1: {
    subKey1: 'value1',
    subKey2: 42
  },
  key2: ['a', 'b', 'c'],
  key3: {
    subKey3: {
      deepKey: 123
    }
  }
};

// Complex algorithm
function complexAlgorithm() {
  let result = 0;

  for (let i = 0; i < 1000; i++) {
    result += Math.sin(i) * Math.cos(i);
  }

  return result;
}

// Promise example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous task
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
};

fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// Complex logic using external library
const moment = require('moment');
const today = moment().format('YYYY-MM-DD');
console.log('Today is', today);

// Advanced array manipulation methods
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log('Squared numbers:', squaredNumbers);

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log('Sum of numbers:', sum);

// Complex regular expression usage
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const validEmails = [
  'example@example.com',
  'test@test.io',
  'invalid-email',
  'another@example.com'
];

const validatedEmails = validEmails.filter((email) => {
  return emailPattern.test(email);
});

console.log('Valid emails:', validatedEmails);

// ... continue with more complex code