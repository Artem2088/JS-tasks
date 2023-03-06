// 8.3.1
function f() {
  console.log("Hello!");
}

Object.prototype.defer = function (n) {
  setTimeout(f, n);
};

f.defer(2000); // выведет "Hello!" через 1 секунду

// 8.3.2
function f(a, b) {
  let res = a + b;
  console.log(res);
}

Function.prototype.defer = function (m) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), m);
  };
};

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
