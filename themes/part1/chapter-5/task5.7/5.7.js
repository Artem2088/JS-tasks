// 5.7.1
function unique(arr) {
  return Array.from(new Set(arr));
}
// 5.7.2
function aclean(arr) {
  let obj = {};

  for (let key of arr) {
    let sorted = key.toLowerCase().split("").sort().join("");
    obj[sorted] = key;
  }

  return Object.values(obj);
}

// 5.7.3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more
