// 1.7.1
elem.append(document.createTextNode(text));
elem.textContent = text;

// 1.7.2
function clear(elem) {
  elem.innerHTML = "";
}

// 1.7.3
/* Потому что ааа добавлено не корректно, без тега.
 Поэтому браузер вынес ааа за пределы table*/

// 1.7.4
let tagUl = document.createElement("ul");
document.body.prepend(tagUl);

function createLists() {
  while (true) {
    let value = prompt("Введите текст", "");
    if (!value) {
      break;
    }
    let tagLi = document.createElement("li");
    tagLi.textContent = data;
    tagUl.append(tagLi);
  }
}

console.log(createLists());

// 1.7.5
function createTree(data) {
  for (let key in data) {
    let ul = document.createElement("ul");
    ul.textContent = key;
    document.body.prepend(ul);
    let li = document.createElement("li");
    li.innerHTML = key;
    let childrenUl = createTree(data[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }
}

createTree(data);

// 1.7.6
function lengthLI() {
  let tagLi = document.querySelectorAll("li");

  for (let key of tagLi) {
    let countLi = key.getElementsByTagName("li").length;
    if (!countLi) continue;

    key.firstChild.data += " [" + countLi + "]";
  }
}
lengthLI();

// 1.7.7
// 1.7.8
// 1.7.9
// 1.7.10
