// 4.1.1
//  1)
let selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

// 2)
let option = new Option("Классика", (value = "classic"));
let selected = document.getElementById("genres");
selected.append(option);
console.log(selected);

// 3)
newOption.selected = true;
