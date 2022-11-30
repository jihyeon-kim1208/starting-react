//Objects : one of the javascript's data type
// objec = {key : value};

//1.Literals and properties
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const kim = { name: "kim", age: 4 };
print(kim);

kim.hasJob = true;
console.log(kim.hasJob); // can add properties later

delete kim.hasJob; // can delete properties later
console.log(kim.hasJob);

//2. Computed properties : key should be string

console.log(kim.name);
console.log(kim["name"]); // runtime 에서 결정될 때
kim["hasJob"] = true;
console.log(kim.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(kim, "name");
printValue(kim, "age");

//3. property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("kim", 30);
console.log(person4);
/*function Person(name, age) {
  return {
    name, // name : name, >> key와 value의 이름이 동일하다면 하나만 써줘도 됨
    age,
  };
}*/

// 4. constructor function
function Person(name, age) {
  //this ={};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator : property existance check (key in obj)
console.log("name" in kim); // true
console.log("age" in kim);
console.log("random" in kim); // false
console.log(kim.random); // undefined

//6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in kim) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}
