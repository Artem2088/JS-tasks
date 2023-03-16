// 4.4.1
/*
HTML:
<button class="main-btn">
        <span class="main-btn__span">Кликните, чтобы увидеть форму</span>
    </button>
    <div class="wrapper">
        <div id="prompt-form-container">
            <form id="prompt-form">
                <div id="prompt-message"></div>
                <input name="text" type="text">
                <input type="submit" value="Ok">
                <input type="button" name="cancel" value="Отмена">
            </form>
        </div>
    </div>
*/
/*
CSS:
.wrapper {
    display: flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
}

.visible {
    visibility: visible;
}
*/
let mainBtn = document.querySelector(".main-btn");
let popup = document.querySelector(".wrapper");

mainBtn.addEventListener("click", (e) => {
  e.preventDefault;
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
});

function showPrompt(text, callback) {
  mainBtn.hidden = true;
  popup.classList.add("visible");
  let form = document.getElementById("prompt-form");
  let container = document.getElementById("prompt-form-container");
  document.getElementById("prompt-message").innerHTML = text;
  form.text.value = "";

  function complete(value) {
    popup.classList.remove("visible");
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == "") return false; // игнорируем отправку пустой формы

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == "Escape") {
      complete(null);
    }
  };

  container.style.display = "block";
  form.elements.text.focus();
}
