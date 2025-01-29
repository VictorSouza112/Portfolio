document.addEventListener("DOMContentLoaded", () => {
  const loadingContainer = document.querySelector(".loading-container");
  const loadingText = document.querySelector(".loading-text");
  const logoImage = document.querySelector(".logo-image");
  const progressBar = document.querySelector(".progress-bar-fill");
  const starBg = document.querySelector(".star-bg");
  const rocket = document.createElement("div");

  // Adiciona o foguete
  rocket.classList.add("rocket");
  document.querySelector(".progress-bar").appendChild(rocket);

  const starColors = [
    "#ffffff", // Branco
    "#a7b2ff", // Azul Claro
  ];

  // Função para gerar uma box-shadow aleatória para o efeito de glow
  function getRandomGlow(color) {
    const blurRadius = Math.random() * 3 + 2; // Raio do desfoque
    const spreadRadius = Math.random() * 1.5 + 0.5; // Raio de espalhamento
    return `0 0 ${blurRadius}px ${spreadRadius}px ${color}`;
  }

  // Função para criar estrelas
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 5 + 1;
    const speed = Math.random() * 5 + 8;
    const opacity = Math.random() * 0.5 + 0.5;
    const randomColor =
      starColors[Math.floor(Math.random() * starColors.length)];

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = opacity;
    star.style.backgroundColor = randomColor;

    // Aplica o box-shadow aleatório
    star.style.boxShadow = getRandomGlow(randomColor);

    const animationName = `moveStar${Math.floor(Math.random() * 3)}`;

    star.style.animationName = animationName;
    star.style.animationDuration = `${speed}s`;

    starBg.appendChild(star);
  }

  // Cria várias estrelas
  for (let i = 0; i < 150; i++) {
    createStar();
  }

  setTimeout(() => {
    loadingText.style.opacity = 1;

    setTimeout(() => {
      loadingContainer.classList.add("loaded");
      setTimeout(() => {
        window.location.href = "pages/home.html";
      }, 500);
    }, 2500);
  }, 1000);

  logoImage.style.animationPlayState = "running";
  progressBar.style.animationPlayState = "running";
});

// Animações das estrelas
const style = document.createElement("style");
style.innerHTML = `
  @keyframes moveStar0 {
      0% { transform: translate(0, 0); }
    100% { transform: translate(-100px, -100px); }
  }
  @keyframes moveStar1 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(100px, -100px); }
  }
  @keyframes moveStar2 {
      0% { transform: translate(0, 0); }
      100% { transform: translate(0, 100px); }
  }
`;
document.head.appendChild(style);