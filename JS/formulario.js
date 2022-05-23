let descEst = parseInt(document.getElementById("descEst")); 
let descTr = parseInt(document.getElementById("descTr"));
let descJr = parseInt(document.getElementById("descJr"));


function calcularMonto() {
    let valorInicial = document.getElementById("valorInicial").innerHTML.split("$")[1];
    let categoria = document.getElementById("categoria").value;
    let cantidad = document.getElementById("cantidad").value;
    let Total=0;
    
    if (categoria === "estudiante") {
        Total = valorInicial - (valorInicial * 0.8);
        } else if (categoria === "trainee") {
        Total = valorInicial - (valorInicial * 0.5);
    } else if (categoria === "junior") {
        Total = valorInicial - (valorInicial * 0.15);
    } else {
        Total = parseInt(valorInicial);
    }
    document.getElementById("Total").value = "$" + Total*cantidad;
}




function Borrar() {
    document.getElementById("calculoPago").reset();
}

