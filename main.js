function toggleSearch() {
  document.querySelector(".search-container").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOpciones = document.querySelector(".menu_opciones");

  menuToggle.addEventListener("click", function () {
      menuOpciones.classList.toggle("active");
  });
});
