const img = document.querySelector(".karusel");
const imgNum = 3; // количество изображений в карусели
const delay = 2000; // задержка в мс между сменой изображений
img.width = 600; // браузер подгонит изображения в карусели под эту ширину

let i = 1;
setTimeout(function tick() {
  i = i + 1;
  if (i > imgNum) i = 1;
  img.src = `images/vyborg${i}.jpg`; // изображения находятся в папке "images"
  // и имеют названия 1.jpg, 2.jpg, 3.jpg и т.д.
  setTimeout(tick, delay);
}, delay);
