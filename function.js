//1. function declaration : function name (param1, param2) { body... return;}
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
  return 0;
}
log("Hello!!");

/* typescript 
function log (message : string) : number{
    console.log(message);
    return 0;
}*/

//2. parameters
//premitive parameters : passed by value
// object parameters : passed by reference

function changeName(obj) {
  obj.name = "coder";
}
const hi = { name: "hihi" };
changeName(hi);
console.log(hi);

//3. default parameters (add in ES6)
function showMessage(message, from = "unknown") {
  //if (from == undefined){
  //from = 'unknown';
  //}
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

//4. Rest parameters
function printAll(...args) {
  // 3개의 값이 담겨져 있는 array
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding");

//5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  //console.log(globalMessgae);
  function printAnother() {
    console.log(message);
    let childMessage = "hello2";
  }
  //console.log(childMessage); >> error
  // return undefined; 항상 선언되어 있는 것 (생략가능)
}
printMessage();
//console.log(message); >> error (Uncaught ReferenceError)
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

//6. Return value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum : ${sum(1, 2)}`);

//7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}
// good
function upgradeUser2(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// First-class function
// 1. Function expression
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printY, printN) {
  if (answer === "love") {
    printY();
  } else {
    printN();
  }
}

const printY = function () {
  console.log("yes");
};
const printN = function print() {
  // named function : better debugging , recursion
  console.log("no");
};
randomQuiz("wrong", printY, printN);
randomQuiz("love", printY, printN);

// Arrow function : always anonymous
const simplePrint = function () {
  console.log("simplePrint");
};
const simplePrint2 = () => console.log("simplePrint2");
const add = (a, b) => a + b;
//const simpleMultiply = (a,b) => { return a*b;};

//IIFE : Immediately invoked function expression
(function hello() {
  console.log("IIFE");
})(); // 함수를 바로바로 실행

//6. 클래스와 오브젝트의 차이점
/*class = fields + methods
class 
- template 
- declare
- no data in
object 
- instance of a class
- created many times
- data in*/

`use strinct`;
// Object-oriendted programming
// class : template
// object : instance of a class

// 1. class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}
const kim = new Person("kim", 20);
console.log(kim.name);
console.log(kim.age);
kim.speak();

//2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    //if (value <0){
    //throw Error('age cannot be negative');
    //}
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User("steve", "Job", -1);
console.log(user1.age);

//3. Fields (public, private)
class Experiment {
  publicField = 2; // 외부접근가능
  #privateField = 0; // 클래스 외부에서는 값을 읽을 수도 접근할 수도 없음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined >> babel에서만 이용가능

//4. Static properties and methods
class Article {
  static publisher = "coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // overiding
    super.draw();
    console.log("T");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle : color : ${this.color} `;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6.Class checking : InstanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());

//javascript reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// calculate function : using switch
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substring":
      return a - b;
    case "devide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(caculate("add", 2, 3));
