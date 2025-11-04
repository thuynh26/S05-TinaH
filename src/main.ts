// CMPM 121 Smelly Code Activity

// --------------------- Constants and Variables ---------------------
const DOC_TITLE = "Clicked ";
const HEADING = "CMPM 121 Project";

const IDS = {
  incrementBtn: "increment",
  decrementBtn: "decrement",
  resetBtn: "reset",
  counter: "counter",
} as const;

const COLORS = {
  even: "lightblue",
  odd: "pink",
  default: "white",
} as const;

let count = 0;

// start the app
function start() {
  setup();
  handleEvents();
}
start();

// Setup HTML
function setup() {
  document.body.innerHTML = `
    <h1>${HEADING}</h1>
    <p>Counter: <span id="${IDS.counter}">0</span></p>
    <button id="${IDS.incrementBtn}">Click Me!</button>
    <button id="${IDS.decrementBtn}">Decrement</button>
    <button id="${IDS.resetBtn}">Reset</button>
  `;
}

// Handle button click events
function handleEvents() {
  const incrementBtn = document.getElementById(IDS.incrementBtn);
  const decrementBtn = document.getElementById(IDS.decrementBtn);
  const resetBtn = document.getElementById(IDS.resetBtn);
  const counter = document.getElementById(IDS.counter);

  // Check if any element is missing, then exit the function
  if (!incrementBtn || !decrementBtn || !resetBtn || !counter) return;

  incrementBtn.addEventListener("click", () => {
    updateCount(1);
  });

  decrementBtn.addEventListener("click", () => {
    updateCount(-1);
  });

  resetBtn.addEventListener("click", () => {
    resetCount();
  });
}

// --------------------- Helper Functions ---------------------
function updateCount(delta: number) {
  count += delta;
  updateUI();
}

function resetCount() {
  count = 0;
  updateUI();
}

// Update the counter display, document title, and background color (based on even/odd count)
function updateUI() {
  const counter = document.getElementById(IDS.counter);
  if (!counter) return;

  counter.innerHTML = `${count}`;
  document.title = DOC_TITLE + count;

  // Change background color based on count (0 = default, even = lightblue, odd = pink)
  if (count === 0) {
    document.body.style.backgroundColor = COLORS.default;
    return;
  } else {
    document.body.style.backgroundColor = count % 2 ? COLORS.odd : COLORS.even;
  }
}
