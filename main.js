const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector(".display");
const specialchars = ["%", "+", "-", "/", "*", "="];
let output = "";

const calc = (btnvalue) => {
  if (btnvalue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue === "Ac") {
    output = "";
  } else if (btnvalue === "del") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnvalue == "" && specialchars.includes(btnvalue)) return;
    output += btnvalue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calc(e.target.dataset.value));
});
