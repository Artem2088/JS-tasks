function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true

/*
a.__proto__ == B.prototype -> true
*/
