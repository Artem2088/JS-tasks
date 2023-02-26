// 5.5.1
function camelize(str) {
  let arr = str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
  return arr;
}

// 5.5.2
function filterRange(arr, a, b) {
  let filtered = arr.filter((item) => item >= a && item <= b);
  return filtered;
}

// 5.5.3
function filterRangeInPlace(arr, a, b) {
  for (let key in arr) {
    let value = arr[key];

    // удалить, если за пределами интервала
    if (value < a || value > b) {
      arr.splice(key, 1);
      key--;
    }
  }
}

// 5.5.4
let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log(arr);

// 5.5.5
function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

// 5.5.6
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
// 5.5.7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);
console.log(names); // Вася, Петя, Маша

// 5.5.8
let usersMapped = users.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));
// 5.5.9
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

sortByAge(arr);
// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

// 5.5.10
let array = [1, 2, 3];
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
shuffle(array);

// 5.5.11
function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

console.log(getAverageAge(arr));
// 5.5.12
function unique(arr) {
  let res = [];

  for (let str of arr) {
    if (!res.includes(str)) {
      res.push(str);
    }
  }

  return res;
}

// 5.5.13
function groupById(array) {
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
