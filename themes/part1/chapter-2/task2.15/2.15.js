// 2.15.1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

// Ответ: отличий нет

// 2.15.2
// 1).
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
// 2).
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// 2.15.3
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// function min(a, b) {
//   return Math.min(a, b);
// }
min(2, 5); /* 2 */
min(3, -1); /* -1 */
min(1, 1); /* 1 */

// 2.15.4
let x = prompt("Введите число - x", "");
let n = prompt("Введите число - n", "");

function pow(x, n) {
  //1).
  if (x >= 1 && n >= 1) {
    let res = x ** n;
    return res;
  }
  alert("Введите целое число > 1");

  //2). let res = x && n >= 1 ? x ** n : alert("Введите целое число > 1");
  //   return res;
}
pow(x, n);
