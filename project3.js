let theball = document.getElementById("bounce");

const up = () => {
  theball.style.bottom = "350px";
};

document.addEventListener("keydown", up);

const down = () => {
  theball.style.bottom = "0px";
};

document.addEventListener("keyup", down);
