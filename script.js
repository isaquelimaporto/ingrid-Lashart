// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// FECHAR MENU AO CLICAR
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// FORMULÁRIO
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;

  window.open(`https://wa.me/557799904342?text=${encodeURIComponent(texto)}`, "_blank");

  form.reset();
});

// ANIMAÇÃO SCROLL
const elements = document.querySelectorAll(".fade");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();