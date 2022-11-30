//1. function declaration
// function name (param1, param2) {body... return;}
// function is object in JS

function printHello(){
    console.log("Hello");
}
printHello();



//2. parameters
// pass by value / pass by reference
function changeName(obj) {
  obj.name = "coder";
}
const hi = { name: "hihi" };
changeName(hi);
console.log(hi);

//3. default parameters
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");

//4. Rest parameters

function printAll(...args) {
  // 3개의 값이 담겨진 args 배열
  //   for (let i = 0; i < args; i++) {
  //     console.log(args[i]);
  //   }
  for (const arg of args) {
    console.log(arg);
  }
  args.foreach((arg) => console.log(arg)); // foreach 함수형 언어 사용
}
printAll("a", "b", "c");
