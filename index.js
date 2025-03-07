const cards = document.querySelectorAll(".personal-card");

cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, index * 500);
});

const imgs = document.querySelectorAll(".img-tecno");
const initialPosition = [];

function dance() {
  for (let i = 0; i < imgs.length; i++) {
    let randomX = Math.floor(Math.random() * (1500 - 100) + 100);
    let randomY = Math.floor(Math.random() * (200 - 20) + 20);
    initialPosition.push({ x: randomX, y: randomY });
    imgs[i].style.transform = `translate(${randomX + "px"},${randomY + "px"})`;
  }
  setTimeout(animationBubble, 1200);
}

function animationBubble() {
  imgs.forEach((img, index) => {
    img.animate(
      [
        {
          transform: `translate(${initialPosition[index].x}px, ${initialPosition[index].y}px)`,
        },
        {
          transform: `translate(${
            initialPosition[index].x +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px, ${
            initialPosition[index].y +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px)`,
        },
        {
          transform: `translate(${
            initialPosition[index].x +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px, ${
            initialPosition[index].y +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px)`,
        },
        {
          transform: `translate(${
            initialPosition[index].x +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px, ${
            initialPosition[index].y +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px)`,
        },
        {
          transform: `translate(${
            initialPosition[index].x +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px, ${
            initialPosition[index].y +
            Math.floor(Math.random() * (150 - -10) + -10)
          }px)`,
        },
      ],
      {
        duration: 5000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in",
      }
    );
  });
}

dance();
