// Open integrated terminal on visual studio code (View > Integrated Terminal)
// type 'node filename.js'
// mousedown, mouseup, mouseover, mouseout

// let reset = function() {
//   itemOne.style.width = ''
//   itemTwo .style.backgroundColor = ''
//   itemThree.innerHTML = 'The mouse must leave the box to change the text'
//   itemFive.style.display = "none"
// };
// resetButton.onclick = reset;

// ---------------------- FIRST PROJECT
let view = document.getElementById("view");
let closing = document.getElementById("close");
let img = document.getElementById("magician");

let open = function () {
  closing.style.display = "block";
  img.style.display = "block";
};

let hide = function () {
  closing.style.display = "none";
  img.style.display = "none";
};

view.addEventListener("click", open);
closing.addEventListener("click", hide);

// change text
const changeText = () => {
  view.innerHTML = "Maaaagic";
};

const returnText = () => {
  view.innerHTML = "Wanna see magic?";
};

view.addEventListener("click", changeText);
closing.addEventListener("click", returnText);
