// < 변수 primitive 타입과 object의 차이점 >

// 변수는 데이터를 담고있음

// 1. primitive타입 : number / string / boolean / null / undefined <<< 변수 담을 수 있는 가장 작은 단위
let number = 2;
let number2 = number;
console.log(number); //2
console.log(number2); //2

number2 = 3;
console.log(number); // 2
console.log(number2); // 3
// 변수를 설정하면 메모리에 데이터가 생기고 한 할당된 메모리에 데이터를 그대로 담음

// 2. object 타입 : 위 타입을 제하면 전부 오브젝트(함수도 포함)
// primitive 타입보다 무게가 나가므로 오브젝트는 메모리에 reference(오브젝트의 '키'들의 주소값) 를 담음
let obj1 = {
  name: "kim",
  age: 5,
};
console.log(obj1.name); // kim
let obj2 = obj1; // 오브젝트에 오브젝트를 변수로 선언할때 obj의 주소를 복사함
console.log(obj2.name); // kim
obj1.name = "code";
console.log(`==========`);
console.log(obj1.name); // code
console.log(obj2.name); // code
// 변수로 선언된 오브젝트의 키를 변경하면 새로 생긴 오브젝트의 키도 변경됨(reference를 동일히 저장하기 때문)

const obj3 = {
  name: "kim",
  age: 5,
};
obj3.name = "code";
/*obj ={ // error : 상수로 오브젝트를 선언할때는 obj의 '주소'는 절대 안변하지만 그 주소에 있는 키는 변경가능
    name : 'coder',
    age : 4,
}*/

// 3. 함수 : 반복적으로 수행되는 로직을 만듬 >> 즉 함수는 '기능'자체를 얘기하고 기능을 수행하는 인자를 변수로 설정해주는 것
// 함수 선언은 함수를 정의만 해주는 것이고 인자의 값은 호출시 지정해주는 것
function add(a, b) {
  return a + b;
}
// 함수 호출은 정의된 함수를 가져와서 호출시 설정한 값을 함수에 집어넣고 그 값을 리턴
const sum = add(3, 4);
console.log(sum); // 7
// 함수도 오브젝트이기에 함수선언은 함수의 '주소'를 저장하는 것
const doSomthing = add;
const result = doSomthing(3, 4);
console.log(result); // 7
// 이후 함수의 이름을 다른 '변수'로 할당해도 같은 함수를 가르키는 것
function devide(num1, num2) {
  return num1 / num2;
}
function surprise(callback) {
  const result = callback(2, 3);
  console.log(result);
}
surprise(add); // add를 호출한 것과 동일
surprise(devide); // devide 호출
// 콜백 함수는 함수의 인자를 다른 함수로(정확히는 다른 함수의 주소) 설정하는 것
