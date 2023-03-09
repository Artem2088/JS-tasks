// 1.9.1
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 1.9.2
let div = document.createElement("div");

div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

console.log(scrollWidth);

// 1.9.3
ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";

// 1.9.4
/*
1. getComputedStyle - не всегда возвращает правильную ширину.
2. clientWidth - показывает размер за вычетом полосы прокрутки.
3. 
*/
