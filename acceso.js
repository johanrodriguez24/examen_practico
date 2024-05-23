   let enviar = document.querySelector("#enviar");

    enviar.addEventListener("click", logueo);
   
   
   
   function logueo() {
            let email = document.querySelector("#e-mail").value;
            let contrasena = document.querySelector("#contra").value;

            if (email === "srodriguez5860@gmail.com" && contrasena === "123456") {
                alert("Inicio de sesión exitoso");
                window.location = "index.html";
            } else {
                alert("Datos incorrectos");
            }

            return false;
        }


// Habilitar y deshabilitar botón de aceptación de las políticas de privacidad

let terminos = document.querySelector("#terminos");


enviar.disabled = true;

terminos.addEventListener('change', habilitarBoton);

function habilitarBoton() {
    if (terminos.checked) {
        enviar.disabled = false;
    } else {
        terminos.disabled = true;
    }
}
  