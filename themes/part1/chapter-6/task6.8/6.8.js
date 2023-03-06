// 6.8.1
function printNumbers(from, to) {
  /* setInterval*/
  let current = from;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);

  /* setTimeout*/
  //   let current = from;
  //   setTimeout(function go() {
  //     console.log(current);
  //     if (current < to) {
  //       setTimeout(go, 1000);
  //     }
  //     current++;
  //   }, 1000);
}
printNumbers(1, 5);

// 6.8.2
// setTimeout  будет выполнен после цикла for.
// i = 100000000
