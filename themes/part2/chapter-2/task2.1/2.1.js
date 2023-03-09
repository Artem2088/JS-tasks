// 2.1.1
let btn = document.getElementById("hider");

btn.addEventListener("click", function () {
  document.getElementById("text").hidden = true;
});

// 2.1.2
let btn2 = document.createElement("btn");
btn2.textContent = "Нажми на меня";
btn2.style.border = "1px solid black";
btn2.style.padding = "5px";
document.body.append(btn);

btn2.addEventListener("click", function () {
  btn2.hidden = true;
});

// 2.1.3
/* 
Ответ: Сработает 1 и 2.
*/

// 2.1.4
field.onclick = function (event) {
  let fieldCoords = this.getBoundingClientRect();

  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }
  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};

// 2.1.5
let menu = document.querySelector("menu");
let elem = menu.querySelector(".title");

elem.onclick = function () {
  menu.classList.toggle("open");
};

// 2.1.6
let message = document.querySelectorAll(".pane");

for (let key of message) {
  key.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );

  key.firstChild.onclick = () => key.remove();
}

// 2.1.7
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

let width = 130;
let count = 3;

let item = carousel.querySelector("ul");
let lists = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  item.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (lists.length - count));
  item.style.marginLeft = position + "px";
};
