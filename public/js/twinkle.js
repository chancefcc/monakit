// Generate a twinkle star and append it to the galaxy, remove it after animation.
function generateTwinkleStar() {
  const twinkleStarTemplate = document.getElementById("twinkle-star");
  if (!twinkleStarTemplate) { return; }
  
  // Clone the twinkle star template and set its attributes.
  const twinkleStar = twinkleStarTemplate.cloneNode(true);
  twinkleStar.style.position = "absolute";
  twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight/3)) + "px";
  twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";
  twinkleStar.style.height = twinkleStar.style.width;
  twinkleStar.classList.add("twinkle");
  document.getElementById("galaxy").appendChild(twinkleStar);

  // Remove the twinkle star after the animation is completed.
  setTimeout(() => {
    twinkleStar.remove();
  }, 2500);
}

setInterval(generateTwinkleStar, 5000);
