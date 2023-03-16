// 4.2.1
let div = document.createElement("div");
div.style.width = "150px";
div.style.height = "150px";
div.style.border = "1px solid black";
document.body.append(div);

let textArea = document.createElement("textarea");

div.onclick = function () {
  changeDiv();
};

function changeDiv() {
  textArea.value = div.innerHTML;
  div.append(textArea);

  textArea.onkeydown = function (event) {
    if (event.key == "Enter") {
      this.blur();
    }
  };

  textArea.onblur = function () {
    editEnd();
  };

  div.replaceWith(textArea);
  textArea.focus();
}

function editEnd() {
  div.innerHTML = textArea.value;
  textArea.replaceWith(div);
}

// 4.2.2
const table = document.querySelector("table");

let editing = false;

let editionItems;

table.addEventListener("click", changeInnerHTML);

function changeInnerHTML(e) {
  if (!table.contains(e.target)) return;

  if (e.target.closest(".ok") || e.target.closest(".cancel")) {
    finishEdit(editionItems, e.target);
  } else if (e.target.closest("td")) {
    if (editing) return;

    let elem = e.target.tagName !== "TD" ? e.target.parentElement : e.target;

    editing = true;

    const textarea = createTextarea(elem);

    const btnOk = createBtn("ok");
    const btnCancel = createBtn("cancel");

    elem.append(textarea);
    elem.append(btnOk);
    elem.append(btnCancel);
    textarea.focus();

    editionItems = {
      div: elem,
      textarea: textarea,
      buttonOk: btnOk,
      buttonCancel: btnCancel,
    };
  }
}

function createTextarea(div) {
  const elem = document.createElement("textarea");
  elem.classList.add("textarea_div");
  elem.value = div.innerHTML;
  return elem;
}

function createBtn(btnType) {
  const btn = document.createElement("button");
  btn.classList.add(btnType);
  btn.textContent = btnType.toUpperCase();

  return btn;
}

function finishEdit(elems, btn) {
  if (btn.closest(".ok")) {
    elems.div.innerHTML = elems.textarea.value;
  }
  elems.textarea.remove();
  elems.buttonOk.remove();
  elems.buttonCancel.remove();
  editing = false;
}

// 4.2.3
mouse.addEventListener("click", function (event) {
  mouse.setAttribute("tabindex", "0");
  mouse.focus();
  mouse.style.position = "absolute";

  mouse.addEventListener("keydown", function (event) {
    if (event.code == "ArrowUp") {
      mouse.style.top =
        mouse.getBoundingClientRect().top - mouse.offsetHeight + "px";
    } else if (event.code == "ArrowRight") {
      mouse.style.left =
        mouse.getBoundingClientRect().left + mouse.offsetWidth + "px";
      console.log(mouse.getBoundingClientRect().right);
    } else if (event.code == "ArrowDown") {
      mouse.style.top =
        mouse.getBoundingClientRect().top + mouse.offsetHeight + "px";
    } else if (event.code == "ArrowLeft") {
      mouse.style.left =
        mouse.getBoundingClientRect().left - mouse.offsetWidth + "px";
    }
  });
});
