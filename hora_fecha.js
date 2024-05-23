function reloj_digital() {
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes(); 
    let ss = date.getSeconds();

    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    
    let time = hh + ":" + mm + ":" + ss;

    //A partir de aquí se emplea la funcionalidad para ejecutar la actualización de los datos de fecha y día de la semana

    
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; //Mi array que contiene los parámetros (día de la semana) a usar
    let diaSemana = diasSemana[date.getDay()];
    
    let dia = date.getDate();
    let mes = date.getMonth() + 1; 
    let año = date.getFullYear();

    // Esto para empezar el día y el mes en cero
    dia = (dia < 10) ? "0" + dia : dia;
    mes = (mes < 10) ? "0" + mes : mes;

    
    let fecha = diaSemana + ", " + dia + "/" + mes + "/" + año;

    
    let watch = document.querySelector('#contenedor_reloj');

    
    watch.innerHTML = fecha + " " + time;
}


setInterval(reloj_digital, 1000);


