// 8.1.1
// true -> null -> undefined

// 8.1.2
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// 8.1.3
// Ответ: rabbit.

// 8.1.4
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// Живот ленивого хомяка пуст
console.log(lazy.stomach); // <ничего>
