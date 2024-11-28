// Validación del formulario de contacto
const formulario = document.getElementById("form-contacto");
const btnArriba = document.getElementById('btn-arriba');
// Seleccionar el botón hamburguesa y el menú
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Agregar evento de clic al botón hamburguesa
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert(`Gracias por tu mensaje, ${nombre}. ¡Me pondré en contacto contigo pronto!`);
    formulario.reset(); // Limpia los campos del formulario
});

