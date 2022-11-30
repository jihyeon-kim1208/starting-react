### Array

1. Declaration

```js
"use strict";
const arr1 = new Array();
const arr2 = [1, 2];
```

2. Index position

```js
const fruits = ["apple", "pear"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);
```

3. Looping over an array

```js
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
```

5. Searching

```js
// Indexof : find the index
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
```

```js
Q1. make a string out of an array
   {
      const fruits = ["apple", "banana", "orange"];
      const result = fruits.join("|"); // separator
      console.log(result);
   }
Q2. make an array out of a string
   {
      const fruits = "1,2,3,4";
      const result2 = fruits.split("|", 2); // separator, limit
      console.log(result2);
   }
Q3. make this array look like this : [5,4,3,2,1]
   {
      const array = [1, 2, 3, 4, 5];
      const revarr = array.reverse();
      console.log(revarr);
      console.log(array); // 배열 자체를 reverse
   }
Q4. make new array without the first two elements
   {
      const array = [1, 2, 3, 4, 5];
      //const newArray = array.splice(0, 2); >> 배열 자체를 수정
      const newArray = array.slice(2, 5); // 배열에서 원하는 부분만 return
      console.log(newArray);
   }

class Student {
   constructor(name, age, enrolled, score) {
      //4 가지의 properties
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
   }
}
   const students = [
   new Student("A", 29, true, 45),
   new Student("B", 28, false, 80),
   new Student("C", 30, true, 90),
   new Student("D", 40, false, 66),
   new Student("E", 18, true, 88),
];

Q5. find a student with the score 90
{
   const result = students.find((student, index) => student.score === 90); // 첫번째 찾은 값
   //console.log(student, index);
   console.log(result);
}

Q6. make an array of enrolled students
{
   const enrolled_stu = students.filter((student) => student.enrolled);
   console.log(enrolled_stu);
}

Q7. make an array containing only the students score
//result should be : [45,80,90,66,88]
{
   const scoreArr = students.map((student) => student.score);
   console.log(scoreArr);
}

Q8. check if there is a student with the score lower than 50
{
   const result = students.some((student) => student.score < 50);
   // 점수가 50보다 낮은 학생이 있는 경우
   console.log(students.score); // undefined
   console.log(`=========` + result); // true
   //const result2 = students.every((student) => students.score < 50); >> 모든 학생들의 점수가 50보다 낮은 경우 false return
   const result2 = !students.every((student) => student.score >= 50);
   console.log(result2); // true
}

Q9. compute students average score
{
   const result = students.reduce((prev, curr) => {
   // 원하는 시작점부터 모든 배열을 돌면서 값을 누적할 때 사용
   // reduceRight : E D C B A 배열의 오른쪽부터 출력
   console.log("-----------");
   console.log(prev);
   console.log(curr);
   return prev + curr.score;
}, 0);
   const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
   console.log(result2 / students.length);
}

Q10. make a string containing all the scores, result should be : '45, 80, 90, 66, 88'
{
   const result = students
   .map((student) => student.score) // student 배열을 score 로 전환해서 새로운 배열 생성
   //.filter((score) => score >= 50) >> 50점 이하인 student 제외
   .join();
   console.log(result);
}
// Q10 sorted in ascending order result should be : '45, 66, 80, 88, 90'
{
   const result = students
   .map((student) => student.score)
   .sort((a, b) => a - b) // : asc / sort((a,b) => b-a) : desc
   .join();

   console.log(result);
}
```
