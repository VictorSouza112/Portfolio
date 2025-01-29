
// -------------- ANIMAÇÃO DE DIGITAÇÃO --------------
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