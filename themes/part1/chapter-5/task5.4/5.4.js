// 5.4.1
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits.length);
// Ответ: 4

// 5.4.2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп ", "Регги ");

// 5.4.3
let arr = ["a", "b"];
arr.push(function () {
  alert(this);
});
arr[2]();
// Ответ: a,b,  function () {alert(this)}

// 5.4.4
function sumInput() {
  let arr = [];
  while (true) {
    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    arr.push(+value);
  }

  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}
alert(sumInput());

// 5.4.5
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}
