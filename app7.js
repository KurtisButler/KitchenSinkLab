// This is just a variable containing my first name as the value
let firstName = "Kurt";
// This consant just states the number of states in the U.S.
const USAStates = 50;
// This variable is named val and is just the sum of 5 and 4
let val = 5 + 4;

function sayHello() {
  alert("Hello Javascript!");
}

sayHello();

function checkAge(name, age) {
  if (age < 21)
    alert("Sorry" + " " + name + ", you aren't old enough to view this page!");
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetables = [
  "Broccoli",
  "Carrots",
  "Cauliflower",
  "Cabbage",
  "Spinach",
  "Brussel Sprouts",
];

for (let items = 0; items < vegetables.length; items++) {
  console.log(vegetables[items]);
}

let pet = {
  name: "Luna",
  breed: "Cat",
};

console.log(pet);

let people = [
  {
    name: "Alphonse",
    age: 23,
  },
  {
    name: "Rose",
    age: 17,
  },
  {
    name: "Danny Devito",
    age: 77,
  },
  {
    name: "Cynthia",
    age: 20,
  },
  {
    name: "Erica",
    age: 29,
  },
];

for (let i = 0; i < people.length; i++) {
  checkAge(people[i].name, people[i].age);
}

checkAge("Alphonse", 23);
checkAge("Rose", 17);
checkAge("Danny Devito", 77);
checkAge("Cynthia", 20);
checkAge("Erica", 29);

function getLength(word) {
  return word.length;
}

let stringLength = getLength("Hello World");
if (stringLength % 2 == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
