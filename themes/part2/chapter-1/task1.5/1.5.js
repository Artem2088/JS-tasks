// 1.5.1
function lengthLi() {
  for (let li of document.querySelectorAll("li")) {
    let title = li.firstChild.data;

    title = title.trim();

    let count = li.getElementsByTagName("li").length;

    console.log(title + ": " + count);
  }
}

lengthLi();

// 1.5.2
// Ответ: 1 (узел-элемент);

// 1.5.3
// Ответ: BODY.

// 1.5.4
// document – объект класса HTMLDocument.
// HTMLDocument -> Document ->  Node
