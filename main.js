//Buscador
function toggleSearch() {
  document.querySelector(".search-container").classList.toggle("active");
}

//Bruger menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOpciones = document.querySelector(".menu_opciones");

  menuToggle.addEventListener("click", function () {
      menuOpciones.classList.toggle("active");
  });
});

//Carrusel historias
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let index = 0;
  const totalItems = document.querySelectorAll(".carousel-item").length;

  function updateCarousel() {
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextButton.addEventListener("click", () => {
      if (index < totalItems - 1) {
          index++;
      } else {
          index = 0; // Reinicia al primer slide
      }
      updateCarousel();
  });

  prevButton.addEventListener("click", () => {
      if (index > 0) {
          index--;
      } else {
          index = totalItems - 1; // Vuelve al último slide
      }
      updateCarousel();
  });

  // Auto-slide cada 3 segundos
  setInterval(() => {
      if (index < totalItems - 1) {
          index++;
      } else {
          index = 0;
      }
      updateCarousel();
  }, 3000);
});