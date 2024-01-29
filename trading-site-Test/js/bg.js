const starContainer = document.getElementById('star-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Randomize the horizontal position of the star
  const starX = Math.random() * window.innerWidth;
  star.style.left = `${starX}px`;

  // Define the symbols with the desired probabilities
  // 80% dots ".", 10% dollars "$", 10% euros "€"
  const symbols = Array(80).fill(".").concat(Array(10).fill("$"), Array(10).fill("€"));
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  star.textContent = symbol;
  // Set the background color and border for dollar symbols
  if (symbol === "$") {
    star.style.color = "black";
    star.style.textShadow = `
      -1px -1px 0 green,  
       1px -1px 0 green,
      -1px  1px 0 green,
       1px  1px 0 green`; // Simulate an outline with text-shadow
  } 
  else if (symbol === ".") {
    star.style.color = "white";
    star.style.textShadow = '0px 0px 2px white';
  }
  else {
    star.style.color = "black";
    star.style.textShadow = `
      -1px -1px 0 white,  
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white`; // Simulate an outline with text-shadow
  }

  starContainer.appendChild(star);
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

function createGlowingStar() {
  const star = document.createElement('div');
  star.classList.add('star', 'glowing-star'); // Add 'glowing-star' class

  const starX = Math.random() * window.innerWidth;
  star.style.left = `${starX}px`;

  star.textContent = "."; // Set text content to dot

  // Copy the rest of the styling from createStar for size, opacity, etc.
  const starSize = Math.random() * 10 + 5; // Font size between 10px and 30px
  star.style.fontSize = `${starSize}px`;

  const starOpacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
  star.style.opacity = starOpacity;

  const animationDuration = Math.random() * 5 + 5;
  star.style.animationDuration = `${animationDuration}s`;

  const animationDelay = Math.random() * -10;
  star.style.animationDelay = `${animationDelay}s`;

  starContainer.appendChild(star);

  star.addEventListener('animationend', () => {
    star.remove();
  });
}
// Create multiple stars
for (let i = 0; i < 100; i++) { // Adjust the number of stars here
  createStar();
}

setInterval(createGlowingStar, 3000);
createGlowingStar();
