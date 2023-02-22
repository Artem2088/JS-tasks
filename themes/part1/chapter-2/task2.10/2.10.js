// 2.10.1
if ("0") {
  alert("Привет");
}

// 2.10.2
let result = prompt('Какое "официальное" название JavaScript?', "");

if (result == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? “ECMAScript”!");
}

// 2.10.3
let res = prompt("Введите число", "");

if (res > 0) {
  alert(1);
} else if (res < 0) {
  alert(-1);
} else if (res == 0) {
  alert(0);
}

// 2.10.4
let results;
result = a + b < 4 ? "Мало" : "Много";

// 2.10.5
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
