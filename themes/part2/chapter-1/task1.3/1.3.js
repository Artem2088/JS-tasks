// 1.3.1
document.body.firstElementChild; /* div */
document.body.lastElementChild; /* ul */
document.body.lastElementChild.lastElementChild; /* li */
// 1.3.2
// 1. true
// 2. false

// 1.3.3
let table = document.body.firstElementChild;

let redCells = [
  table.rows[0].cells[0],
  table.rows[1].cells[1],
  table.rows[2].cells[2],
  table.rows[3].cells[3],
  table.rows[4].cells[4],
];

for (let key of redCells) {
  key.style.backgroundColor = "red";
}
