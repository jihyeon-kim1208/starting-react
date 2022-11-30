"use strict";
//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["apple", "pear"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

//3. Looping over an array

//for of
for (let fruit of fruits) {
  console.log(fruit);
}

// foreach
fruits.forEach((fruit, index) => console.log(fruit, index));

// Addtion, deletion, copy
// push : add and item to the end
fruits.push("banana");
console.log(fruits);
//pop : remove and item from the end
const poped = fruits.pop(); // pop 된 아이들이 할당됨
fruits.pop();
console.log(fruits);
//unshift : add an item to the beginning
fruits.unshift("strawberry");
console.log(fruits);
//shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note !! : shift, unshift ar slower than pop, push
// splice : remove an item by index position
fruits.push("orange", "apple", "pear", "banana");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, "pineapple", "strawberrry");
console.log(fruits);

//combine two arrays
const fruits2 = ["hi", "hello"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
// Indexof : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("orange")); // 0
console.log(fruits.indexOf("apple")); // -1
// Includes
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("coconat")); // false
// lastIndexof
fruits.push("apple");
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
