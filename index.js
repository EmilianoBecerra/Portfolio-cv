const cards = document.querySelectorAll(".personal-card");
const imgs = document.querySelectorAll(".img-tecno");

cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, index * 500);
});

function positionSkills() {
  const container = document.querySelector(".div-tecnicals");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const centerCircleX = containerWidth * 0.5;
  const centerCircleY = containerHeight * 0.5;
  const radius = Math.min(containerWidth, containerHeight) / 2.5;
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= containerHeight / 3) {
      imgs.forEach((img, i) => {
        const angle = ((2 * Math.PI) / imgs.length) * i;
        const x =
          centerCircleX + radius * Math.cos(angle) - img.clientWidth / 2;
        const y =
          centerCircleY + radius * Math.sin(angle) - img.clientHeight / 2;

        img.style.transform = `translate(${x}px , ${y}px)`;
      });
    }
  });
}


window.addEventListener("load", positionSkills);
window.addEventListener("resize", positionSkills);