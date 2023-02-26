// 5.11.1
let value = new Date(2012, 1, 20, 3, 12);

console.log(value);

// 5.11.2
const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

function getWeekDay(date) {
  return days[date.getDay()];
}

let date = new Date(2014, 0, 0);
console.log(getWeekDay(date));

// 5.11.3
function getLocalDay(date2) {
  let day = date2.getDay();
  if (day == 0) {
    day = 7;
  }

  return day;
}

let date2 = new Date(2012, 0, 3);
console.log(getLocalDay(date2));

// 5.11.4
function getDateAgo(date3, days) {
  let dateDuble = new Date(date3);

  dateDuble.setDate(date3.getDate() - days);
  return dateDuble.getDate();
}

let date3 = new Date(2015, 0, 2);

console.log(getDateAgo(date3, 1));
console.log(getDateAgo(date3, 2));
console.log(getDateAgo(date3, 365));

// 5.11.5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 5.11.6
function getSecondsToday() {
  let current = new Date();

  let day = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate()
  );

  let value = current - day;
  return Math.round(value / 1000);
}

console.log(getSecondsToday());

// 5.11.7
function getSecondsToTomorrow() {
  let current = new Date();

  let nextDay = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() + 1
  );

  let value = current - nextDay;
  return Math.round(value / 1000);
}

console.log(getSecondsToTomorrow());

// 5.11.8
function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return "прямо сейчас";
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + " сек. назад";
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + " мин. назад";
  }

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
