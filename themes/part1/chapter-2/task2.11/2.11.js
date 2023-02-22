// 2.11.1
alert(null || 2 || undefined); /* 2 */

// 2.11.2
alert(alert(1) || 2 || alert(3)); /* 1 -> 2 */

// 2.11.3
alert(1 && null && 2); /* null */

// 2.11.4
alert(alert(1) && alert(2)); /* 1 */

// 2.11.5
alert(null || (2 && 3) || 4); /* 3 */

// 2.11.6
if (age >= 14 && age <= 90);

// 2.11.7
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// 2.11.8
if (-1 || 0) alert("first"); /* first  */
if (-1 && 0) alert("second"); /* не выполнится */
if (null || (-1 && 1)) alert("third"); /* third  */

// 2.11.9
let admin = prompt("Введите логин", "");

if (admin === "Админ") {
  let pass = prompt("Введите пароль", "");

  if (pass === "Я главный") {
    alert(" Здравствуйте!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (admin === "" || admin === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
