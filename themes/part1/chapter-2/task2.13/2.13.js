// 2.13.1
let i = 3;

while (i) {
  alert(i--);
}
// Ответ: 1. (Цикл уменьшается до 0, при нуле будет false, поэтому покажет 1);

// 2.13.2
i = 0;
while (++i < 5) alert(i);
// Ответ: 1,2,3,4

i = 0;
while (i++ < 5) alert(i);
// Ответ: 1,2,3,4,5

// 2.13.3
for (let i = 0; i < 5; i++) alert(i);
// Ответ: 0,1,2,3,4,
for (let i = 0; i < 5; ++i) alert(i);
// Ответ: 0,1,2,3,4

// 2.13.4
for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// 2.13.5
let a = 0;
while (a < 3) {
  alert(`number ${i}!`);
  a++;
}

// 2.13.6
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// 2.13.7
let n = 10;

out: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue out;
  }

  console.log(i);
}
