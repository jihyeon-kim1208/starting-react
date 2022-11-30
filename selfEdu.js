var fredrick = {
  name: "hihi",
  canRead: false,
  canWrite: false,
};

const selfEdu = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEdu(fredrick));
console.log(fredrick);
