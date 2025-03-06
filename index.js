const cards = document.querySelectorAll(".personal-card");

cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, index * 500);
});

const imgs = document.querySelectorAll(".img-tecno");

imgs.forEach((img) => {
  for (let i = 0; i < imgs.length; i++) {
    let random = 10;
    img.style.transform = `translateX(${random})`;
    random + 10;
  }
});
