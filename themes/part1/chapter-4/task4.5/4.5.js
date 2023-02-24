// 4.5.1
let object = {};

function A() { return object; }
function B() { return object; }

alert( new A() == new B() ); // true

// Ответ: Если функции будут возвращать один объект;

// 4.5.2
let a = +prompt("a?", 0);
let b = +prompt("b?", 0);

function Calculator () {
    this.a = a;
    this.b = b;
    this.read = function() {
    this.a, 
    this.b
    }
    this.sum = function() {
      return  this.a + this.b
    };
    this.mul = function() {
       return this.a * this.b
    }
}

let calc = new Calculator(a,b);
calc.read();
alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() );

// 4.5.3
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function() {
        let a = +prompt("Сколько нужно добавить?", '')
        this.value = this.value + a;
        return this.value
    }
}
let accumulator = new Accumulator(1); 
accumulator.read(); 
accumulator.read(); 
alert(accumulator.value);