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

// Componenteização do header para reutilizar em outra view.
function criarHeader() {
  const header = document.querySelector("#header");
  if (header) {
    header.innerHTML = `
      <header>
        <div class="topbar">
          <button
            class="menu-button"
            type="button"
            onclick="toggleSidenav()"
            aria-label="Abrir menu">
            <img src="./assets/icons/menu.png" alt="Abrir menu">
          </button>
          <button
            class = "logo-header"
            type = "button"
            onclick = "paginaInicial()"
            aria-label = "Página inicial">
            <img src="./assets/img/logo-anuario.svg" class="logo" alt="Logo Anuário">
          </button>

          <button
            class="search-button"
            type="button"
            onclick="searchr()"
            aria-label="searchr">
            <img src="./assets/icons/lupa.svg" alt="searchr">
          </button>
        </div>

        <aside id="mySidebar" class="sidebar" aria-label="Menu lateral">
          <div class="sidebar-header">
            <img src="./assets/img/logo-anuario.svg" alt="Logo Anuário" class="sidebar-logo">

            <button
              type="button"
              class="btn-close"
              onclick="toggleSidenav()"
              aria-label="Fechar menu">
            </button>
          </div>

          <nav>
            <ul class="sidebar-nav">
              <li><a href="#">Fortaleza em Síntese</a></li>
              <li><a href="#">Contribuintes ISS (2021)</a></li>
              <li><a href="#">Prefeitura</a></li>
              <li><a href="#" class="active" aria-current="page">Mapas</a></li>
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
            <li><a href="#" class="active" aria-current="page">Mapas</a></li>
            <li><a href="#">Organograma</a></li>
          </ul>
        </nav>
      </header>
    `;
    console.log("header created");
  }
}

document.addEventListener("DOMContentLoaded", criarHeader);
