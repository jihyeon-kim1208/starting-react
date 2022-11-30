//javascript 최신 문법 정리 (ES6, ES11)

//object
const student = {
  // const : 값을 변경할 수 없는 변수 , let : 변수 영역을 코드 블록 안으로 한정
  name: "Anna",
  level: 1,
};
{
  const name = student.name;
  const level = student.level;
  console.log(name, level);
}

{
  const { name, level } = student;
  console.log(name, level);
}

{
  const { name: studentName, level: studentLevel } = student;
  console.log(studentName, studentLevel);
}

//array
const animals = ["a", "b"];

{
  const first = animals[0];
  const second = animals[1];
  console.log(first, second);
}

// spread syntax
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; // map, foreach X => spread operator

  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruit1 = ["1", "2"];
  const fruit2 = ["3", "4"];

  const fruits = [...fruit1, ...fruit2];
  console.log(fruits);

  //object merge
  const dog1 = { dog: "hihi" };
  const dog2 = { dog: "hoho" };
  const dog = { ...dog1, ...dog2 }; // key 가 동일한 object를 병합하면 제일 마지막 object값이 앞에 덮어씌워짐
  console.log(dog);
}

{
  {
    function printMessage(message = "default message") {
      console.log(message);
    }
    printMessage("hello");
    printMessage();
  }
}

//ternary operator
const isCat = true;
{
  const component = isCat ? "y" : "n";
  console.log(component);
  console.log(isCat ? "y" : "n");
}

//template literals

{
  const weather = "sunny";
  const temperature = "16c";

  console.log(`today weather is ${weather} and temperature is ${temperature}.`); // use '`' to print text
}

// optional chainning (ES11)
{
  const person1 = {
    name: "kimjh",
    job: {
      title: "s/w engineer",
      manager: {
        name: "bob",
      },
    },
  };
  const person2 = {
    name: "bob",
  };

  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    //printManager(person2); >> manager 존재하지 않아서 출력 X (undefined)
  }
}

//nullish coalescing operator
{
  //logical OR operator
  //false : false, '', 0, null, undefined
  {
    const name = "kim";
    const userName = name || "guest"; // 앞에있는 값이 false 일때만 "guest" 실행됨
    console.log(userName);
  }
}

{
  // 주의 : name 이 false 일 때
  {
    const name = null;
    const userName = name || "guest";
    console.log(userName);

    const name2 = "";
    const userName2 = name2 || "guest2";
    console.log(userName2);

    const num = 0;
    const message = num || "undefined";
    console.log(message);
  }

  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);

    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
  }
}
