const display = document.getElementById("display");
const darkBtn = document.querySelector(".darkSwi");
let body = document.querySelector("body");
let calculator = document.querySelector("#calculator");
let buttons = document.querySelectorAll("button");

// Track the current mode
let isDarkMode = false;

function passToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function equAns() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}

// Toggle dark mode/light mode
darkBtn.addEventListener("click", () => {
  // Switch the mode
  isDarkMode = !isDarkMode;

  // Update styles based on mode
  if (isDarkMode) {
    body.classList.add("dark-mode");
    calculator.classList.add("dark-mode");
    buttons.forEach((button) => button.classList.add("dark-mode"));
    darkBtn.src = "icons8-light-mode-78.png";
  } else {
    body.classList.remove("dark-mode");
    calculator.classList.remove("dark-mode");
    buttons.forEach((button) => button.classList.remove("dark-mode"));
    darkBtn.src = "https://img.icons8.com/sf-regular-filled/48/moon-symbol.png";
  }
});
