// 6.1.1
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo1(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo2(n) {
  return (n * (n + 1)) / 2;
}
// 6.1.2
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// 6.1.3
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// 6.1.4
function printList(list) {
  let item = list;
  while (item) {
    console.log(item.value);
    item = item.next;
  }
  //   метод с рекурсией
  console.log(item.value);

  if (item.next) {
    printList(item.next);
  }
}
// 6.1.5
function printListReverse(list) {
  // let arr = [];
  let item = list;

  //   while (item) {
  //     arr.push(item.value);
  //     item = item.next;
  //   }

  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     console.log(arr[i]);
  //   }

  //   метод с рекурсией
  if (item.next) {
    printListReverse(item.next);
  }

  console.log(item.value);
}
