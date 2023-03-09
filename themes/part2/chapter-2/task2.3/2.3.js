// 2.3.1
let container = document.addEventListener("click", function (event) {
  let target = event.target;

  if (target.tagName != "BUTTON") return;

  let pane = target.closest("div");

  pane.hidden = true;
});

// 2.3.2
for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function (event) {
  if (event.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector("ul");
  console.log(childrenContainer);
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
};

// 2.3.3
grid.addEventListener("click", (event) => {
  if (event.target.tagName !== "TH") {
    return;
  }
  let tbody = grid.querySelector("tbody");
  let index = event.target.cellIndex;
  let type = event.target.dataset.type;
  let rows = Array.from(tbody.rows);
  let sortedRows;
  if (type === "string") {
    sortedRows = rows.sort((rowA, rowB) =>
      rowA.cells[index].textContent.localeCompare(rowB.cells[index].textContent)
    );
  }
  if (type === "number") {
    sortedRows = rows.sort(
      (rowA, rowB) =>
        rowA.cells[index].textContent - rowB.cells[index].textContent
    );
  }
  tbody.append(...sortedRows);
});

// 2.3.4
document.addEventListener("mouseover", addTooltip);
document.addEventListener("mouseout", removeTooltip);
let tooltip = document.createElement("div");

function addTooltip(event) {
  if (event.target.tagName === "BUTTON") {
    let button = event.target;
    let tooltipContent = event.target.dataset.tooltip;
    tooltip.className = "tooltip";
    tooltip.innerHTML = tooltipContent;
    document.body.append(tooltip);

    let coords = button.getBoundingClientRect();
    let top = coords.top - tooltip.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + button.offsetHeight + 5;
    }
    let left = coords.left + (button.offsetWidth - tooltip.offsetWidth) / 2;
    if (left < 0) {
      left = 0;
    }

    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
  }
}

function removeTooltip() {
  tooltip.remove();
}
