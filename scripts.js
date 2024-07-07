function toggleSummary(element) {
  const summary = element.querySelector(".summary");
  if (summary.style.display === "block") {
    summary.style.display = "none";
  } else {
    summary.style.display = "block";
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  if (Math.random() < 0.5) {
    heart.classList.add("pink");
  }
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${5 + Math.random() * 3}s`;
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000); // Heart lifespan
}

setInterval(createHeart, 500);
