document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading-container');
    const loadingText = document.querySelector('.loading-text');
    const logoImage = document.querySelector('.logo-image');
    const progressBar = document.querySelector('.progress-bar-fill');
    const starBg = document.querySelector('.star-bg');
    const rocket = document.createElement('div');
  
    // Adiciona o foguete
    rocket.classList.add('rocket');
    document.querySelector('.progress-bar').appendChild(rocket);
      
    // Função para criar estrelas
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
  
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 5 + 1; // Ajusta o tamanho das estrelas
      const speed = Math.random() * 8 + 5;
      const opacity = Math.random() * 0.5 + 0.5;
  
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity;
      
      const animationName = `moveStar${Math.floor(Math.random() * 5)}`; // Cria 5 animações diferentes de movimento
  
      star.style.animationName = animationName;
      star.style.animationDuration = `${speed}s`;
  
      starBg.appendChild(star);
    }
  
    // Cria várias estrelas
    for (let i = 0; i < 200; i++) {
      createStar();
    }
      
    setTimeout(() => {
      loadingText.style.opacity = 1;
      
        setTimeout(() => {
          loadingContainer.classList.add('loaded');
            setTimeout(() => {
              window.location.href = "pages/home.html";
          }, 500);
      }, 2500); 
    }, 1000)
    
    logoImage.style.animationPlayState = 'running';
    progressBar.style.animationPlayState = 'running';
  });
  
  // Animações das estrelas
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes moveStar0 {
        0% { transform: translate(0, 0); }
      100% { transform: translate(-20px, -20px); }
    }
    @keyframes moveStar1 {
      0% { transform: translate(0, 0); }
      100% { transform: translate(20px, -20px); }
    }
    @keyframes moveStar2 {
        0% { transform: translate(0, 0); }
        100% { transform: translate(0, 20px); }
    }
  `;
  document.head.appendChild(style);