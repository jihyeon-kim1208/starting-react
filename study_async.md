### 동기와 비동기 - 비동기 콜백

콜백 체인 : 디버깅도 힘들고 로직을 이해하기가 쉽지않음(가독성0)
state // 생산자vs소비자 의 차이를 아는게 중요
promise : 콜백함수 대신 쓰이는 비동기 프로세스 (콜백체인 지옥 대용)

- promise는 클래스
  const A = new Promise((resolve, reject) => {XXX} ) 로 선언

> 네트워크에서 데이터를 받아오거나 읽어오는 것을 비동기적으로 처리하는 것이 좋음

> 새로운 promise를 만들어질땐 executor 함수가 즉시 자동으로 실행되니 유의
> ( ex. 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우 즉, 사용자가 버튼을 눌렀을 때만 네트워크 요청을 해야하는 경우 : 요구가 없었음에도 불필요한 네트워크 통신이 일어날 위험 )

consumers : then / chatch 를 이용하여 성공,실패 시 호출됨
finally : 성공, 실패 상관없이 무조건 마지막에 호출됨
promise : 연결하기도 가능 (then 등을 이용함)

1. Producer : when new promise is created, the executer runs automatically

```js
"use strict";
const promise = new Promise((resolve, reject) => {
  console.log("doing something");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network")); // uncaught error
  }, 2000);
});
```

2. Cosummers : then, catch, finally

```js
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
```

3. promise chaining

```js
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
```

4. Error handling

> async & await : 프로미스 체인들을 좀 더 간결히 동기화시킴
> async : 함수앞에 써주면 promise 함수로 자동으로 바꿔줌
> await : delay를 주어 동기화적으로 보이게함 // 병렬적으로 기능제공
> promise.all : 모든 프로미스들이 병렬적으로 작용
> promise.race : 가장먼저 값을 리턴하는 함수만 전달이 됨
