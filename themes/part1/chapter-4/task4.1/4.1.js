// 4.1.1
user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 4.1.2
function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

// 4.1.3
const user = {
  name: "John",
};

user.name = "Pete";
// Ответ: Да.

// 4.1.4
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// 4.1.5
function multiplyNumeric(key) {
  for (let prop in key) {
    if (typeof key[prop] == "number") {
      key[prop] * 2;
    }
  }
}
