//JSON : javascript object Notation
//1.Object to JSON : stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const hihi = {
  name: "rabbit",
  color: "white",
  size: null,
  birthdate: new Date(), // Date object
  //Symbol: Symbol(),
  jump: () => {
    // jump(function), Symbol 은 json에 포함되지 않음
    //console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(hihi);
console.log(json);

json = JSON.stringify(hihi, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(hihi, (key, value) => {
  //콜백함수
  console.log(`key:${key},value:${value}`);
  //return value;
  return key === "name" ? "kim" : value; // name을 'kim'으로 변경
});
console.log(json);

//2. JSON to Object : parse(JSON)
console.clear();
json = JSON.stringify(hihi);
//const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key},value:${value}`);
  return key === "birthdate" ? new Date(value) : value;
});
console.log(obj);
hihi.jump();
// obj.jump(); : error

console.log(hihi.birthdate.getDate());
//console.log(obj.birthdate); // string
console.log(obj.birthdate.getDate());
