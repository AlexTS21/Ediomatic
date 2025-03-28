//Buscador
function toggleSearch() {
  document.querySelector(".search-container").classList.toggle("active");
}

//Direccionamiento de los botones de modalidades y planes online y presencial
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-grp-pg4").addEventListener("click", function () {
        window.location.href = "#grupal";
    });

    document.getElementById("btn-onl-pg4").addEventListener("click", function () {
        window.location.href = "#indivudual-online";
    });

    document.getElementById("btn-pre-pg4").addEventListener("click", function () {
        window.location.href = "#individual_presen";
    });

    document.getElementById("btn-disp-online").addEventListener("click", function () {
        window.location.href = "#panles-online";
    });

    document.getElementById("btn-agendar-pre").addEventListener("click", function () {
        window.location.href = "#panles-presencial";
    });

    
});

//Direccionamiento a whatsapp con los planes
const planes = {
    //Online
    pfo: "plan flexible en modalidad online",
    plo: "plan ligero en modalidad online",
    pro: "plan regular en modalidad online",
    pso: "plan semi-intensivo en modalidad online",
    pio: "plan intensivo en modalidad online",

    //Individuales
    pfp: "plan flexible en modalidad presencial",
    plp: "plan ligero en modalidad presencial",
    prp: "plan regular en modalidad presencial",
    psp: "plan semi-intensivo en modalidad presencial",
    pip: "plan intensivo en modalidad presencial"

}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cont-plan").forEach(element => {
        element.addEventListener("click", function () {
            const telefono = "2223509876";
            const idPlan = planes[this.id]; // Obtiene el id del elemento clicado
            const mensaje = encodeURIComponent(`Hola, me interesa el  ${idPlan}.\n¿Podrías darme más información?`);
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
        });
    });
});


//Bruger menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOpciones = document.querySelector(".menu_opciones");

  menuToggle.addEventListener("click", function () {
      menuOpciones.classList.toggle("active");
  });
});


//Para el formulario de grupos 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-agendar").addEventListener("click", function () {
        window.location.href = "formulario.html";
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