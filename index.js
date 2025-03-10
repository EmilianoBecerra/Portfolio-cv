const cards = document.querySelectorAll(".personal-card");
const imgs = document.querySelectorAll(".img-tecno");
const centerCircleX = 1800 * 0.5;
const centerCircleY = 500 * 0.5;
const radius = 200;

cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, index * 500);
});

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 450) {
    imgs.forEach((img, i) => {
      const angle = ((2 * Math.PI) / imgs.length) * i;
      const x = centerCircleX + radius * Math.cos(angle);
      const y = centerCircleY + radius * Math.sin(angle);

      img.style.transform = `translate(${x}px , ${y}px)`;
    });
  }
});

//animationBubble();
/* function animationBubble() {
  imgs.forEach((img, index) => {
    requestAnimationFrame(() => {
      img.animate(
        [
          {
            transform: `translate(${initialPosition[index].x}px, ${initialPosition[index].y}px)`,
          },
          {
            transform: `translate(${initialPosition[index].x}px,${initialPosition[index].y}px)`,
          },
        ],
        {
          duration: 3000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    });
  });
} */
