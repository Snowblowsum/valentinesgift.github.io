"use strict";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const img = document.querySelector(".img");
const title = document.querySelector(".title");

// GIFs for each choice
const yesGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjY4MmZiMnh5OTdnMXlvczV1dGxqN3VkbWcyOTZpNXN1cjRqMDBhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GpIpyebc3a16rXj8dU/giphy.gif";
const noGif = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWlybWpqanhyMDJobzJyZG9pbGVjdWQzdmw5OWI0NHczeW9hbDBzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6W67mZ5HMIJ6iSNvso/giphy.gif";

// YES click
yesBtn.addEventListener("click", () => {
  img.src = yesGif;
  title.innerHTML = "Yay! I Love You!! 💗";
  yesBtn.classList.add("hidden");
  noBtn.classList.add("hidden");
});

// NO click
noBtn.addEventListener("click", () => {
  img.src = noGif;
  title.innerHTML = "Oh no... 😢";
  noBtn.classList.add("hidden"); // hides the NO button text
});