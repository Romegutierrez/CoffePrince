const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje-exito");

if (formulario && mensaje) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        mensaje.classList.remove("mostrar");
        void mensaje.offsetWidth;
        mensaje.classList.add("mostrar");

        formulario.reset();
    });
}
