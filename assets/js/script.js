document.addEventListener("DOMContentLoaded", () => {
  // Importa o header
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      const themeToggleDesktop = document.getElementById(
        "theme-toggle-desktop"
      );
      const themeIconDesktop = themeToggleDesktop.querySelector(
        ".theme-icon-desktop"
      );
      const languageToggleDesktop = document.getElementById(
        "language-toggle-desktop"
      );

      const themeToggleMobile = document.getElementById("theme-toggle-mobile");
      const themeIconMobile =
        themeToggleMobile.querySelector(".theme-icon-mobile");
      const languageToggleMobile = document.getElementById(
        "language-toggle-mobile"
      );

      const menuToggle = document.querySelector(".menu-toggle");
      const offcanvasMenu = document.getElementById("offcanvasMenu");
      const offcanvasClose = document.querySelector(".offcanvas-close");

      // Verifica o tema armazenado no localStorage
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "light") {
        document.body.classList.add("light-theme");
        themeIconDesktop.src = "../assets/img/components/header/moon.svg";
      }

      if (storedTheme === "light") {
        document.body.classList.add("light-theme");
        themeIconMobile.src = "../assets/img/components/header/moon.svg";
      }

      themeToggleDesktop.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
          themeIconDesktop.src = "../assets/img/components/header/moon.svg";
          localStorage.setItem("theme", "light");
        } else {
          themeIconDesktop.src = "../assets/img/components/header/sun.svg";
          localStorage.setItem("theme", "dark");
        }
      });

      themeToggleMobile.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
          themeIconMobile.src = "../assets/img/components/header/moon.svg";
          localStorage.setItem("theme", "light");
        } else {
          themeIconMobile.src = "../assets/img/components/header/sun.svg";
          localStorage.setItem("theme", "dark");
        }
      });

      const translations = {
        "pt-BR": {
          header_about: "Sobre",
          header_projects: "Projetos",
          header_experience: "Experiências",
          header_certificates: "Certificados",
          header_contact: "Contato",
          header_resume: "Resumo",
          home_hello: "Olá! ",
          home_name: "Me chamo ",
          about_about: 'Sobre <span class="blue-text">mim</span>',
          about_hello:
            'Olá a todos, me chamo <span class="blue-text">Victor de Souza Santos</span>. Sou um entusiasta de tecnologia com uma sólida base em lógica de programação e habilidades em desenvolvimento de software.',
          about_currently:
            "Atualmente, estou estudando Análise e Desenvolvimento de Sistemas na FIAP.",
          about_quote:
            "“Não é a linguagem de programação que define o programador, mas sim sua lógica.”",
          about_skills:
            'Habilidades <span class="blue-text">Profissionais</span>',
          about_tools: 'Ferramentas <span class="blue-text">Que Uso</span>',
          projects_projects:
            'Meus Trabalhos <span class="blue-text">Recentes</span>',
          projects_here: "Aqui estão alguns dos meus projetos mais recentes.",
          projects_plus:
            'Este repositório é um site que criei enquanto realizava o curso "HTML e CSS: praticando HTML/CSS" da Alura.',
          projects_books:
            'Este repositório é um site responsivo (podendo ser usado em dispositivos mobile, tablet ou desktop) que criei enquanto realizava o curso "HTML e CSS: responsividade com mobile-first" da Alura.',
          projects_number:
            'Esse repositório é um jogo que criei enquanto realizava o curso "Lógica de programação: explore funções e listas" da Alura.',
          experience_experience:
            'Minhas <span class="blue-text">Experiências</span>',
          experience_here: "Aqui estão as minhas experiências profissionais.",
          experience_assistant: "Auxiliar de Manutenção Geral",
          experience_period: "Janeiro de 2022 a Julho de 2024",
          experience_activities:
            "<li>Atendimento a usuários.</li><li>Resolução de problemas em hardware e software.</li><li>Instalação e configuração de equipamentos e sistemas.</li><li>Realização de manutenções periódicas em equipamentos.</li><li>Identificação e resolução de problemas, garantindo o bom funcionamento dos sistemas.</li><li>Oferecimento de suporte técnico aos usuários, esclarecendo dúvidas e orientando sobre o correto dos equipamentos e sistemas.</li>",
          certificates_certificates:
            'Meus <span class="blue-text">Certificados</span>',
          certificates_here: "Aqui estão os meus certificados.",
          certificates_title1: "A Partir do Zero: Iniciante em Programação",
          certificates_text1:
            "Certificado de conclusão do curso para iniciantes em programação disponibilizado pela Alura.",
          certificates_title2: "A Partir do Zero: HTML e CSS para Projetos Web",
          certificates_text2:
            "Certificado de conclusão do curso para iniciantes em HTML e CSS.",
          certificates_title3:
            "Qualificação Profissional em Análise de Sistemas e Prototipagem Web",
          certificates_text3:
            "Certificado de conclusão do primeiro semestre do curso de Análise e Desenvolvimento de Sistemas da FIAP.",
          certificates_title4:
            "Qualificação Profissional em Análise e Design Web 2.0",
          certificates_text4:
            "Certificado de conclusão do segundo semestre do curso de Análise e Desenvolvimento de Sistemas da FIAP.",
          certificates_text5:
            "Certificado do terceiro lugar no Enterprise Challenge FIAP - Ifood.",
          contact_contact: 'Entre em <span class="blue-text">Contato</span>',
          contact_touch:
            "Entre em contato comigo através das redes sociais ou envie um e-mail.",
          footer_projected: "Projetado e desenvolvido por Victor",
        },
        "en-US": {
          header_about: "About",
          header_projects: "Projects",
          header_experience: "Experience",
          header_certificates: "Certificates",
          header_contact: "Contact",
          header_resume: "Resume",
          home_hello: "Hello! ",
          home_name: "My name is ",
          about_about: 'About <span class="blue-text">me</span>',
          about_hello:
            'Hello everyone, my name is <span class="blue-text">Victor de Souza Santos</span>. I am a technology enthusiast with a solid foundation in programming logic and software development skills.',
          about_currently:
            "I am currently studying Systems Analysis and Development at FIAP.",
          about_quote:
            "“It isn't the programming language that defines the programmer, but rather his logic.”",
          about_skills: 'Professional <span class="blue-text">Skills</span>',
          about_tools: 'Tools <span class="blue-text">I Use</span>',
          projects_projects: 'My Recent <span class="blue-text">Works</span>',
          projects_here: "Here are some of my latest projects.",
          projects_plus:
            'This repository is a website I created while taking the "HTML and CSS: practicing HTML/CSS" course from Alura.',
          projects_books:
            'This repository is a responsive website (which can be used on mobile, tablet or desktop devices) that I created while taking the "HTML and CSS: responsiveness with mobile-first" course from Alura.',
          projects_number:
            'This repository is a game I created while taking the course "Programming Logic: Explore Functions and Lists" from Alura.',
          experience_experience:
            'My <span class="blue-text">Experiences</span>',
          experience_here: "Here are my professional experiences.",
          experience_assistant: "General Maintenance Assistant",
          experience_period: "January 2022 to July 2024",
          experience_activities:
            "<li>User support.</li><li>Troubleshooting hardware and software problems.</li><li>Installing and configuring equipment and systems.</li><li>Performing periodic maintenance on equipment.</li><li>Identifying and resolving problems, ensuring that systems function properly.</li><li>Providing technical support to users, answering questions and providing guidance on the correct use of equipment and systems.</li>",
          certificates_certificates:
            'My <span class="blue-text">Certificates</span>',
          certificates_here: "Here are my certificates.",
          certificates_title1: "From Scratch: Beginner Programming",
          certificates_text1:
            "Certificate of completion of the course for beginners in programming provided by Alura.",
          certificates_title2: "From Scratch: HTML and CSS for Web Projects",
          certificates_text2:
            "Certificate of completion of the HTML and CSS beginner course.",
          certificates_title3:
            "Professional Qualification in Systems Analysis and Web Prototyping",
          certificates_text3:
            "Certificate of completion of the first semester of the Systems Analysis and Development course at FIAP.",
          certificates_title4:
            "Professional Qualification in Web 2.0 Analysis and Design",
          certificates_text4:
            "Certificate of completion of the second semester of the Systems Analysis and Development course at FIAP.",
          certificates_text5:
            "Third place certificate in the Enterprise Challenge FIAP - Ifood.",
          contact_contact: 'Get in <span class="blue-text">Touch</span>',
          contact_touch: "Contact me through social media or send an email.",
          footer_projected: "Designed and developed by Victor",
        },
      };

      // Verifica o idioma armazenado no localStorage
      let storedLanguage = localStorage.getItem("language");

      // Define o idioma padrão como português se não houver idioma salvo
      if (!storedLanguage) {
        storedLanguage = "pt-BR";
        localStorage.setItem("language", storedLanguage);
      }

      // Define o texto do botão de linguagem
      languageToggleDesktop.textContent =
        storedLanguage === "pt-BR" ? "EN-US" : "PT-BR";
      languageToggleMobile.textContent =
        storedLanguage === "pt-BR" ? "EN-US" : "PT-BR";

      // Traduz a página com o idioma armazenado
      translatePage(storedLanguage);

      function translatePage(lang) {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
          const key = element.getAttribute("data-i18n");
          if (translations[lang] && translations[lang][key]) {
            // Aplica uma transição suave à opacidade
            element.style.transition = "opacity 0.3s ease-in-out";
            element.style.opacity = 0;
            setTimeout(() => {
              element.innerHTML = translations[lang][key];
              element.style.opacity = 1;
            }, 300);
          }
        });
      }

      languageToggleDesktop.addEventListener("click", () => {
        if (languageToggleDesktop.textContent === "EN-US") {
          languageToggleDesktop.textContent = "PT-BR";
          translatePage("en-US");
          localStorage.setItem("language", "en-US");
        } else {
          languageToggleDesktop.textContent = "EN-US";
          translatePage("pt-BR");
          localStorage.setItem("language", "pt-BR");
        }
      });

      languageToggleMobile.addEventListener("click", () => {
        if (languageToggleMobile.textContent === "EN-US") {
          languageToggleMobile.textContent = "PT-BR";
          translatePage("en-US");
          localStorage.setItem("language", "en-US");
        } else {
          languageToggleMobile.textContent = "EN-US";
          translatePage("pt-BR");
          localStorage.setItem("language", "pt-BR");
        }
      });

      menuToggle.addEventListener("click", () => {
        offcanvasMenu.classList.add("active");
      });
      offcanvasClose.addEventListener("click", () => {
        offcanvasMenu.classList.remove("active");
      });
      // Fecha o offcanvas ao clicar fora dele
      document.addEventListener("click", (event) => {
        if (
          offcanvasMenu.classList.contains("active") &&
          !offcanvasMenu.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          offcanvasMenu.classList.remove("active");
        }
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

      const downloadButtonDesktop = document.querySelector(
        'header .buttons a[href="../assets/docs/curriculo.pdf"]'
      );
      const downloadButtonMobile = document.querySelector(
        '.offcanvas-body ul .buttons a[href="../assets/docs/curriculo.pdf"]'
      );
      const downloadModal = document.getElementById("downloadModal");
      const confirmDownloadButton = document.getElementById("confirmDownload");
      const cancelDownloadButton = document.getElementById("cancelDownload");

      function openModal() {
        downloadModal.classList.add("active");
      }

      function closeModal() {
        downloadModal.classList.remove("active");
      }

      function downloadPDF() {
        const link = document.createElement("a");
        link.href = "../assets/docs/curriculo.pdf";
        link.download = "Victor-de-Souza-Curriculo.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      downloadButtonDesktop.addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
      });
      downloadButtonMobile.addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
      });

      confirmDownloadButton.addEventListener("click", () => {
        // Inicia o download do PDF
        downloadPDF();
        closeModal();
      });

      cancelDownloadButton.addEventListener("click", () => {
        closeModal();
      });

      // Fecha o modal ao clicar fora dele
      document.addEventListener("click", (event) => {
        if (
          downloadModal.classList.contains("active") &&
          !downloadModal
            .querySelector(".modal-content")
            .contains(event.target) &&
          !downloadButtonDesktop.contains(event.target) &&
          !downloadButtonMobile.contains(event.target)
        ) {
          closeModal();
        }
      });
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
  const texts = ["Full-Stack Developer", "Data Analyst"];
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
