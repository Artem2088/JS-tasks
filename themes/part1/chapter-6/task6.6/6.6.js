// 6.6.1
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

// 6.6.2
function sum(a) {
  let currentValue = a;

  function func(b) {
    currentValue += b;
    return func;
  }

  func.toString = function () {
    return currentValue;
  };

  return func;
}
