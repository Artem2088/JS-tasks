let div = document.createElement("div");
div.style.width = "150px";
div.style.height = "150px";
div.style.border = "1px solid black";
document.body.append(div);

div.onclick = function () {
  changeDiv();
};

function changeDiv() {
  let textArea = document.createElement("textarea");
  div.append(textArea);
  console.log((textArea.value = div.innerHTML));
}
