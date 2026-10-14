
const letter = `Happy Birthday, Babyyyyyyyyyy! 💗

you are very special for me and i love you sooooooooooooooooooooooo muchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.

" Very Very Happy Brithday Bubuuuuuuu "

Today is all about YOU. You deserve
so much love, today and always. ♡`;

let typingTimer;

function goToScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);
  nextScreen.classList.add("active");

  // Restart the letter animation each time it opens.
  if (screenId === "letter") {
    clearInterval(typingTimer);
    const letterText = document.getElementById("letterText");
    letterText.textContent = "";

    let index = 0;
    typingTimer = setInterval(() => {
      letterText.textContent += letter[index];
      index++;

      if (index >= letter.length) {
        clearInterval(typingTimer);
      }
    }, 28);
  }

  // Start the balloon game fresh when revisiting it.
  if (screenId === "balloons") {
    resetBalloons();
  }
}

// Balloon game
const balloons = document.querySelectorAll(".balloon");
const score = document.getElementById("score");
const balloonMessage = document.getElementById("balloonMessage");
const finalButton = document.getElementById("finalButton");

let poppedCount = 0;

balloons.forEach(balloon => {
  balloon.addEventListener("click", () => {
    if (balloon.classList.contains("popped")) return;

    balloon.classList.add("popped");
    balloon.textContent = "💗";
    poppedCount++;

    balloonMessage.textContent = balloon.dataset.message;
    score.textContent = `Balloons popped: ${poppedCount} / ${balloons.length}`;

    if (poppedCount === balloons.length) {
      balloonMessage.textContent =
        "You found all my little love notes! 💕";
      finalButton.classList.remove("hidden");
    }
  });
});

function resetBalloons() {
  poppedCount = 0;
  score.textContent = `Balloons popped: 0 / ${balloons.length}`;
  balloonMessage.textContent = "Tap a balloon to reveal a message!";
  finalButton.classList.add("hidden");

  balloons.forEach(balloon => {
    balloon.classList.remove("popped");
    balloon.textContent = "🎈";
  });
}

// Final gift
const giftButton = document.getElementById("giftButton");
const giftHint = document.getElementById("giftHint");
const finalMessage = document.getElementById("finalMessage");

giftButton.addEventListener("click", () => {
  giftButton.textContent = "💝";
  giftButton.disabled = true;
  giftHint.textContent = "Your little surprise is here! ♡";
  finalMessage.classList.remove("hidden");
  giftButton.setAttribute("aria-label", "Gift opened");
});
