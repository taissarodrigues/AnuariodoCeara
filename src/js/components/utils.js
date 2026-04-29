// Função para alternar a visibilidade do menu lateral (sidenav)
function toggleSidenav() {
  const sidenav = document.querySelector("#mySidebar");

  if (sidenav) {
    sidenav.classList.toggle("open");
  }
}
function searchr() {
  console.log("searchr called");
  if (!window.location.href.includes("search.html")) {
    window.location.href = "search.html";
  }
}
function paginaInicial() {
  window.location.href = "index.html";
}

const cardsContainer = document.querySelector("#cards-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (items) => {
  if (!cardsContainer) return;

  cardsContainer.innerHTML = "";

  Object.values(items).forEach((element) => {
    cardsContainer.innerHTML += `
     <div class="card">
     <h3 class="text-medium font-semibold">${element.title}</h3>
     <p class="text-small font-regular">${element.description}</p>
      </div>
    `;
  });
};

if (cardsContainer && searchInput) {
  window.addEventListener("load", () => displayData(data));

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredData = Object.values(data).filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    displayData(filteredData);
  });
}

// Componenteização do header para reutilizar em outra view.
// Vi que o innerHTML é uma simples de fazer isso, para projetos pequenos, mas para projetos maiores, é melhor usar React, ja no JS puro, vi que pode ser melhor utilizar o templade ou fetch para pegar o html, mas para esse projeto, vou usar o innerHTML mesmo, para testar a funcionalidade de reutilização do header,  quero ver outras formas de fazer isso.
function criarHeader() {
  const header = document.querySelector("#header");
  if (!header) return;

  header.innerHTML = `
    <header>
      <div class="topbar">
        <button class="menu-button" type="button" aria-label="Abrir menu">
          <img src="/assets/icons/menu.png" alt="Abrir menu">
        </button>

        <a href="index.html" class="logo-header" aria-label="Página inicial">
          <img src="/assets/img/logo-anuario.svg" class="logo" alt="Logo Anuário">
        </a>

        <button class="search-button" type="button" aria-label="Abrir busca">
          <img src="/assets/icons/lupa.svg" alt="Buscar">
        </button>
      </div>

      <aside id="mySidebar" class="sidebar" aria-label="Menu lateral">
        <div class="sidebar-header">
          <img src="/assets/img/logo-anuario.svg" alt="Logo Anuário" class="sidebar-logo">

          <button type="button" class="btn-close" aria-label="Fechar menu"></button>
        </div>

        <nav>
          <ul class="sidebar-nav">
            <li><a href="#">Fortaleza em Síntese</a></li>
            <li><a href="#">Contribuintes ISS (2021)</a></li>
            <li><a href="#">Prefeitura</a></li>
            <li><a href="#" class="active">Mapas</a></li>
            <li><a href="#">Organograma</a></li>
          </ul>
        </nav>
      </aside>

      <nav class="custom-navbar" aria-label="Navegação principal">
        <h2 class="text-medium">Fortaleza</h2>

        <ul class="nav-list">
          <li><a href="#">Fortaleza em Síntese</a></li>
          <li><a href="#">Contribuintes ISS (2021)</a></li>
          <li><a href="#">Prefeitura</a></li>
          <li><a href="#" class="active">Mapas</a></li>
          <li><a href="#">Organograma</a></li>
        </ul>
      </nav>
    </header>
  `;

  document.querySelector(".menu-button")?.addEventListener("click", toggleSidenav);
  document.querySelector(".btn-close")?.addEventListener("click", toggleSidenav);
  document.querySelector(".search-button")?.addEventListener("click", searchr);
}

document.addEventListener("DOMContentLoaded", criarHeader);

document.addEventListener("DOMContentLoaded", criarHeader);
