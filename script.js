let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if ("0123456789+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
