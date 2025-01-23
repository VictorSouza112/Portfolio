document.addEventListener("DOMContentLoaded", () => {
  // Importa o header
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      const themeToggle = document.getElementById("theme-toggle");
      const themeIcon = themeToggle.querySelector(".theme-icon");

      // Verifica o tema armazenado no localStorage
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "light") {
        document.body.classList.add("light-theme");
        themeIcon.src = "../assets/img/components/header/moon.svg";
      }

      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
          themeIcon.src = "../assets/img/components/header/moon.svg";
          localStorage.setItem("theme", "light");
        } else {
          themeIcon.src = "../assets/img/components/header/sun.svg";
          localStorage.setItem("theme", "dark");
        }
      });
    });

  // Adiciona o background no header ao scrollar
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("header-bg");
    } else {
      header.classList.remove("header-bg");
    }
  });

  // Importa o footer
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  // Faz o fade-in da página após um pequeno delay
  setTimeout(() => {
    document.body.classList.add("fade-in");
  }, 100); // 100ms delay

  const typingText = document.querySelector(".typing-text");
  const texts = ["Desenvolvedor full-stack", "Analista de dados"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (charIndex < texts[textIndex].length && !isDeleting) {
      typingText.textContent = texts[textIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, 100);
    } else if (charIndex === texts[textIndex].length && !isDeleting) {
      setTimeout(function () {
        isDeleting = true;
        type();
      }, 1500);
    } else if (isDeleting && charIndex > 0) {
      typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  type();
});