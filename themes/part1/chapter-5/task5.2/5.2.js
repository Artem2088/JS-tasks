// 5.2.1
let a = +prompt("Введите первое число", 0);
let b = +prompt("Введите второе число", 0);

alert(a + b);

// 5.2.2
let num = 6.35;
alert(Math.round(+num * 10) / 10);

// 5.2.3
function readNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

// 5.2.4
let i = 0;
while (i != 10) {
  i += 0.2;
}
// Ответ: i не равно 10

// 5.2.5
function random(min, max) {
  let res;
  res = min + Math.random(min, max);
  res * (max - min);
  return res;
}

// 5.2.6
function randomInteger(min, max) {
  let integer;
  integer = min + Math.random() * (max + 1 - min);
  return Math.floor(integer);
}
