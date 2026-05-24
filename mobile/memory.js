const matchSound = new Audio('match.mp3'); // Replace with your file name
const mismatchSound = new Audio('error.mp3'); // Replace with your file name
const winSound = new Audio("victory.mp3");
winSound.preload = "auto"; // ensures it loads before use


const grid = document.getElementById("grid");

let tries = 0;

// Use your real images
const images = [
  "rock1.jpg",
  "rock3.jpg",
  "holly1.jpg",
  "sports1.jpg",
  "rock4.jpg",
  "wildlife3.jpg",
  "holly7.jpg",
  "sports4.jpg",
    "masterpiece1.jpg",
    "holly10.jpg",
];

// Duplicate for pairs
let cards = [...images, ...images];

let firstCard = null;
let secondCard = null;
let lock = false;
let matches = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function init() {
  grid.innerHTML = "";
  matches = 0;
  firstCard = null;
  secondCard = null;
  lock = false;

  shuffle(cards);

  cards.forEach((img) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="front" style="background-image:url(${img})"></div>
      <div class="back"></div>
    `;

    card.addEventListener("click", () => flipCard(card, img));

    grid.appendChild(card);
  });
    tries = 0;
document.getElementById("tries").textContent = `Tries: ${tries}`;

}

function flipCard(card, img) {
  if (lock || card.classList.contains("flip")) return;

  card.classList.add("flip");

  if (!firstCard) {
    firstCard = { card, img };
    return;
  }

  secondCard = { card, img };
  lock = true;
tries++;
document.getElementById("tries").textContent = `Tries: ${tries}`;

  if (firstCard.img === secondCard.img) {
       // --> ADD THIS: Play the match sound
    matchSound.play();

    matches++;
    resetTurn();

    if (matches === images.length) {
      setTimeout(showWin, 300);
    }

  } else {
      
      // --> ADD THIS: Play the mismatch sound immediately upon flipping the wrong card
    mismatchSound.play();

    setTimeout(() => {
      firstCard.card.classList.remove("flip");
      secondCard.card.classList.remove("flip");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lock = false;
}

function showWin() {
     // Play the win sound
  winSound.currentTime = 0;
  winSound.play();

  const win = document.createElement("div");
  win.className = "win";

  win.innerHTML = `
<h2 id="winner">🏆 Completed!</h2>
    <div class="bottom-buttons">
      <button onclick="reloadPage()">Replay</button>
      <button onclick="goBack()">Back</button>
    </div>
  `;

  document.body.appendChild(win);
}

function goBack() {
  window.location.href = "index.html";
}

init();

function reloadPage() {
            // Reloads the page from the server (true) or cache (false)
            location.reload(true); 
        }
