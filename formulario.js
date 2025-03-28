document.addEventListener("DOMContentLoaded", function () {
    // Detectar si estamos en formulario.html
    if (window.location.pathname.includes("formulario.html")) {
        document.querySelectorAll(".menu_opciones a").forEach(link => {
            const section = link.getAttribute("href"); // Obtiene el href (#inicio, #nosotros, etc.)
            link.setAttribute("href", "index.html" + section); // Agrega "index.html" delante
        });
    }
});

//Bruger menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOpciones = document.querySelector(".menu_opciones");
  
    menuToggle.addEventListener("click", function () {
        menuOpciones.classList.toggle("active");
    });
});


//PARA MANDAR EL FORMULARIO, AQUI AGREGAR LA LOGICA DE ENVIO DE CORREOS
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario-agendar");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const edad = document.getElementById("edad");
    const email = document.getElementById("email");
    const whatsapp = document.getElementById("whatsapp");
    const idioma = document.getElementById("idioma");

    function validateInput(input, condition) {
        if (condition) {
            input.style.border = "2px solid green";
            return true;
        } else {
            input.style.border = "2px solid red";
            return false;
        }
    }

    function validateForm() {
        let isValid = true;

        isValid &= validateInput(nombre, nombre.value.length > 0 && nombre.value.length <= 30);
        isValid &= validateInput(apellidos, apellidos.value.length > 0 && apellidos.value.length <= 30);
        isValid &= validateInput(edad, edad.value > 0);
        isValid &= validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
        isValid &= validateInput(whatsapp, whatsapp.value === "" || /^\d{10}$/.test(whatsapp.value));
        isValid &= validateInput(idioma, idioma.value !== ""); // Ensure an idiom is selected

        return isValid;
    }

    function showMessage(text, color, redirect = false) {
        let messageBox = document.createElement("div");
        messageBox.style.position = "fixed";
        messageBox.style.top = "50%";
        messageBox.style.left = "50%";
        messageBox.style.transform = "translate(-50%, -50%)";
        messageBox.style.background = color;
        messageBox.style.color = "white";
        messageBox.style.padding = "20px 40px";
        messageBox.style.borderRadius = "12px";
        messageBox.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
        messageBox.style.fontSize = "18px";
        messageBox.style.fontWeight = "bold";
        messageBox.style.textAlign = "center";
        messageBox.style.opacity = "0";
        messageBox.style.transition = "opacity 0.5s ease-in-out";

        messageBox.innerText = text;
        document.body.appendChild(messageBox);

        // Animate the fade-in
        setTimeout(() => {
            messageBox.style.opacity = "1";
        }, 50);

        // If redirect is true, change page after 2 seconds
        if (redirect) {
            setTimeout(() => {
                window.location.href = "index.html#inicio";
            }, 2000);
        } else {
            // Remove message after 2 seconds
            setTimeout(() => {
                messageBox.style.opacity = "0";
                setTimeout(() => messageBox.remove(), 500);
            }, 2000);
        }
    }

    // **Real-time validation for each field**
    nombre.addEventListener("input", () => validateInput(nombre, nombre.value.length > 0 && nombre.value.length <= 30));
    apellidos.addEventListener("input", () => validateInput(apellidos, apellidos.value.length > 0 && apellidos.value.length <= 30));
    edad.addEventListener("input", () => validateInput(edad, edad.value > 0));
    email.addEventListener("input", () => validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)));
    whatsapp.addEventListener("input", () => validateInput(whatsapp, whatsapp.value === "" || /^\d{10}$/.test(whatsapp.value)));
    idioma.addEventListener("change", () => validateInput(idioma, idioma.value !== "")); // Validate selection

    // **Form submission handling**
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            showMessage("Se mandó el correo", "green", true); // Success message and redirect
        } else {
            showMessage("Por favor, verifica tus datos", "red", false); // Error message, no redirect
        }
    });
});


