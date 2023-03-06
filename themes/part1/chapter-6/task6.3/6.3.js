// 6.3.1
// Ответ:
alert(counter2()); // 0
alert(counter2()); // 1

// 6.3.2
// Ответ:
alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

// 6.3.3
// Ответ: Ошибка. Т.к. это блок if

// 6.3.4
function sum(a) {
  return function (b) {
    return a + b;
  };
}

// 6.3.5
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

// 6.3.6
function byField(items) {
  return (a, b) => (a[items] > b[items] ? 1 : -1);
}

// 6.3.7
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) /* Нужно внести изменения в это место. */ {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}
