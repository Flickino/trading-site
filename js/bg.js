const starContainer = document.getElementById('star-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Randomize the horizontal position of the star
  const starX = Math.random() * window.innerWidth;
  star.style.left = `${starX}px`;

  // Define the symbols with the desired probabilities
  // 80% dots ".", 15% dollars "$", 5% euros "€"
  const symbols = Array(80).fill(".").concat(Array(10).fill("$"), Array(10).fill("€"));
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  star.setAttribute('data-symbol', symbol); // Use a data attribute to store the symbol

  // Set the color to green if the symbol is a dollar
  if (symbol === "$") {
    star.style.color = "green"; // Set color to green for dollars
  } else {
    star.style.color = "white"; // Default color for other symbols
  }

  // Randomize the size (font-size) of the star
  const starSize = Math.random() * 20 + 10; // Font size between 10px and 30px
  star.style.fontSize = `${starSize}px`;

  // Randomize the opacity of the star
  const starOpacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
  star.style.opacity = starOpacity;

  // Randomize the animation duration (between 5 and 10 seconds)
  const animationDuration = Math.random() * 5 + 5;
  star.style.animationDuration = `${animationDuration}s`;

  // Randomize the animation delay (to scatter the initial positions of the stars)
  const animationDelay = Math.random() * -10;
  star.style.animationDelay = `${animationDelay}s`;

  starContainer.appendChild(star);

  // Optional: Remove star after it's animated (to avoid an infinitely growing DOM)
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// Create multiple stars
for (let i = 0; i < 100; i++) { // Adjust the number of stars here
  createStar();
}
