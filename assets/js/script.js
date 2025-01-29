document.addEventListener("DOMContentLoaded", () => {
  // -------------- IMPORTA O HEADER --------------
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      // Código do header vai em header.js
      const headerScript = document.createElement("script");
      headerScript.src = "../assets/js/header.js";
      document.body.appendChild(headerScript);
    });

  // -------------- ANIMAÇÃO DOS ITENS COM GRADIENTE --------------
  const animatedTitles = document.querySelectorAll(".item-with-gradient");

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  animatedTitles.forEach((animatedTitle) => {
    observer.observe(animatedTitle);
  });

  // -------------- FADE-IN --------------
  setTimeout(() => {
    document.body.classList.add("fade-in");
  }, 100); // 100ms delay

  // -------------- IMPORTA O FOOTER --------------
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});