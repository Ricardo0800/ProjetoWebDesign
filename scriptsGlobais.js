const menuBtn = document.querySelector(".fa-bars");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  aside.classList.toggle("mostrar");
});

function navegar(pagina, event) {
  event.preventDefault();
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo-principal").innerHTML = html;
    });
}

const menuLinks = document.querySelectorAll("nav a");
const sidebarLinks = document.querySelectorAll("aside a");

// Junta todos os links em um só array
const allLinks = [...menuLinks, ...sidebarLinks];

allLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove a classe 'is-clicked' de todos os links
    allLinks.forEach(l => l.classList.remove("is-clicked"));

    // Adiciona a classe ao item clicado
    this.classList.add("is-clicked");

    // Chama a função SPA com a página correta
    const href = this.getAttribute("href");
    navegar(href, event);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  navegar("/pages/inicio.html", { preventDefault: () => {} });
});
