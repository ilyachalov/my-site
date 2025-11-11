const img_flip = document.querySelectorAll("img");

function toggleFlip(e) {
  if (!e.target.className) {
    e.target.className = "flip_vert";
  } else {
    e.target.className = "";
  }
}

img_flip.forEach((item) => {
  item.addEventListener("click", toggleFlip);
});
