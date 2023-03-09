// 1.7.1
elem.append(document.createTextNode(text));
elem.textContent = text;

// 1.7.2
function clear(elem) {
  elem.innerHTML = "";
}

// 1.7.3
/* Потому что ааа добавлено не корректно, без тега.
 Поэтому браузер вынес ааа за пределы table*/

// 1.7.4
let tagUl = document.createElement("ul");
document.body.prepend(tagUl);

function createLists() {
  while (true) {
    let value = prompt("Введите текст", "");
    if (!value) {
      break;
    }
    let tagLi = document.createElement("li");
    tagLi.textContent = data;
    tagUl.append(tagLi);
  }
}

console.log(createLists());

// 1.7.5
function createTree(data) {
  for (let key in data) {
    let ul = document.createElement("ul");
    ul.textContent = key;
    document.body.prepend(ul);
    let li = document.createElement("li");
    li.innerHTML = key;
    let childrenUl = createTree(data[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }
}

createTree(data);

// 1.7.6
function lengthLI() {
  let tagLi = document.querySelectorAll("li");

  for (let key of tagLi) {
    let countLi = key.getElementsByTagName("li").length;
    if (!countLi) continue;

    key.firstChild.data += " [" + countLi + "]";
  }
}
lengthLI();

// 1.7.7
function createCalendar(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";

    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 9);

// 1.7.8
let timerId;

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}
function update() {
  let clock = document.getElementById("clock");
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  clock.children[2].innerHTML = seconds;
}

// 1.7.9
let a = document.querySelector("ul");
let firstLi = document.getElementById("one");
let b = "<li>2</li><li>3</li>";
firstLi.insertAdjacentHTML("beforeend", b);

// 1.7.10
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) =>
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
  );

table.tBodies[0].append(...sortedRows);
