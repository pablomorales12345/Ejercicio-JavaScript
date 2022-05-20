function precio() {
    
    let tipo = document.getElementById("tipoticket").value;
    let cantidad = document.getElementById("cantidad").value;
    let valor = cantidad * 200;
    
    if(tipo == "Estudiante"){
        valor= valor * 0.2;
    }
    else if( tipo == "Trainee"){
        valor= valor * 0.5;
    }
    else{
        valor = valor * 0.85;
    }
    
    document.getElementById("precio").innerHTML=" Total a Pagar: $" + valor;
    }
    
    let resumen= document.getElementById("resumen");
    resumen.onclick = precio;
 