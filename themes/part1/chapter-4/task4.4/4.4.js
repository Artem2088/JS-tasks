// 4.4.1
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
alert(user.ref.name);
// Ответ: будет ошибка.

// 4.4.2
let calculator = {
  read() {
    this.a = +prompt("Ввведите - а", 0);
    this.b = +prompt("Ввведите - b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 4.4.3
let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
