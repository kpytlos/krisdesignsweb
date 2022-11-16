// ---------------------- SECOND PROJECT

let color = document.getElementById("choose");
let caruzel = document.getElementById("caruzel");

const colorValue = () => {
  return Math.floor(Math.random() * 256);
};
console.log(colorValue);

// function colorChange(event) {
//   let randomColor =
//     "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
//   event.target.style.backgroundColor = randomColor;
// }

const colorChange = (event) => {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
};

color.addEventListener("click", colorChange);
caruzel.addEventListener("wheel", colorChange);
