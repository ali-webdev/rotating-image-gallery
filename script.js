const galleryContainer = document.querySelector(".container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let rotationangel = 0;
let timer;

prevBtn.addEventListener("click", ()=> {
  rotateGallery(45);
  resetTimer();
});

nextBtn.addEventListener("click", () => {
  rotateGallery(-45);
  resetTimer();
});

function rotateGallery(angel) {
  rotationangel += angel;
  galleryContainer.style.transform = `perspective(1000px) rotateY(${rotationangel}deg)`;
}


function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    rotateGallery(-45);
    resetTimer();
  }, 3000);
}

resetTimer();