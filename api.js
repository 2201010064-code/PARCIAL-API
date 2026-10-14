
document.addEventListener("DOMContentLoaded", function () {

    // Credenciales de EmailJS
    const PUBLIC_KEY = "HY2LE38sxQdcnatCR";
    const SERVICE_ID = "service_sd1zzqa";
    const TEMPLATE_ID = "template_9zx6i5n";

    // Inicializar EmailJS
    emailjs.init(PUBLIC_KEY);

    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const boton = document.getElementById("enviar");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const destinatario = document.getElementById("destinatario").value;
        const mensaje = document.getElementById("mensaje").value;

        boton.disabled = true;
        resultado.textContent = "Enviando mensaje...";
        resultado.style.color = "black";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: nombre,
            from_email: correo,
            to_email: destinatario,
            message: mensaje
        })
        .then(function (respuesta) {
            resultado.textContent = "¡Correo enviado correctamente!";
            resultado.style.color = "green";

            console.log("Respuesta:", respuesta);
            formulario.reset();
        })
        .catch(function (error) {
            resultado.textContent = "Error al enviar el correo.";
            resultado.style.color = "red";

            console.error("Error:", error);
        })
        .finally(function () {
            boton.disabled = false;
        });
    });
});

