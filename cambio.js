let imagen_inicial = document.querySelector("#imagen1");
let boton_cambiar = document.querySelector("#cambio_imagen");

if (imagen_inicial && boton_cambiar) {
    imagen_inicial.addEventListener("mouseover", function(){
        imagen_inicial.setAttribute("src", "img/441456986_10219931556757967_2481378400906192796_n.jpg");
    });

    imagen_inicial.addEventListener("mouseout", () => {
        imagen_inicial.setAttribute("src", "img/logo_principal/294486316_460935239370367_2931215610360413325_n.jpg");
    });

    boton_cambiar.addEventListener("click", (e) => {
        //alert(e.target.nodeName + " " + e.type);
        let rutaInicial = "img/logo_principal/294486316_460935239370367_2931215610360413325_n.jpg";
        let rutaActual = imagen_inicial.getAttribute("src");

        if (rutaInicial === rutaActual) {
            imagen_inicial.setAttribute("src", "img/441456986_10219931556757967_2481378400906192796_n.jpg");
        }
    });
} else {
    console.error("Elementos no encontrados");
}

