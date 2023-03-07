// 1.6.1
let value = document.querySelector("div");
let res = value.dataset.widgetName;
console.log(res);

// 1.6.2
let link = document.querySelectorAll("li > a");
link = Array.from(link);
let arr = [];

for (let i = 0; i < link.length; i++) {
  arr = link[i].getAttribute("href");

  if (
    arr.includes("http://" && "://") &&
    !arr.includes("http://internal.com")
  ) {
    link[i].style.color = "orange";
  }
}
