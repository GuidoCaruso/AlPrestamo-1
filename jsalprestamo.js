function BancosDisponibles(nombreBanco, interes){
    this.banco = nombreBanco;
    this.interes = interes;
}
var bancoConInteres = new BancosDisponibles("Santander", 10);

var bancoConInteres2 = { banco:"Banco Galicia", interes:7}
var bancoConInteres3 = { banco:"Banco Rio", interes:22}
var bancoConInteres4 = { banco:"Banco Ciudad", interes:32}
var bancoConInteres5 = { banco:"Banco Supervielle", interes:12}
var bancoConInteres6 = { banco:"Banco Hsbc", interes:26}
var bancoConInteres7 = { banco:"Banco Comafi", interes:14}
var bancoConInteres8 = { banco:"Banco Macro", interes:24}
var bancoConInteres9 = { banco:"Banco Bbva", interes:6}
var bancoConInteres10 = { banco:"Banco Provincia", interes:16}

var arrayDeAlPrestamo = [bancoConInteres, bancoConInteres2 , bancoConInteres3 , bancoConInteres4 , bancoConInteres5 , bancoConInteres6 , bancoConInteres7 , bancoConInteres8 , bancoConInteres9 , bancoConInteres10 ,];

function BancosAlPrestamo(){
    var promptBanco = prompt("Que banco queres usar");
    for(var i = 0; i < arrayDeAlPrestamo.length; i++){
        if(arrayDeAlPrestamo[i].banco.toLowerCase().includes(promptBanco.toLowerCase())){
            alert("Muchas gracias por seleccionarnos. Somos"+ promptBanco);
            console.log("El usuario a seleccionado"+ promptBanco);
            document.getElementById("Solicita-tu-prestamo").style.background = "#4C60EC";
            document.getElementById("BotonDePrestamo").innerHTML = "¡Listo! en breve recibiras un mail";
            document.getElementById("BotonDePrestamo").style.background = "MediumSeaGreen";
            document.getElementById("funfacts").style.background = "MediumSeaGreen";
            
        }
    }
    }