"use strict";

//1.Producer
// when new promise is created, the executer runs automatically
const promise = new Promise((resolve, reject) => {
  console.log("doing something");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network")); // uncaught error
  }, 2000);
});
//2. Cosummers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    // error handling
    console.log(error);
  })
  .finally(() => {
    // 성공실패여부 상관없이 무조건 어떤 기능을 마지막으로 실행
    console.log("finally");
  });

//3.promise chaining
const fechNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fechNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // 값 바로 전달 가능, 또다른 비동기 promise도 전달 가능
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error handling
