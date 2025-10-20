function fnGeo() {
    datoVariable=document.getElementById("txtDato").value;
    console.log("Ingresaste el dato: ", datoVariable);
}

function fnCalculaRider() {
    let numero1= 0;
    let numero2= 0;

    numero1= document.querySelector('#txtNum1').value;
    numero2= document.querySelector('.txtNum2').value;

    resultadoSuma= parseInt(numero1) + parseInt(numero2)
    console.log(`El resultado de ${numero1} + ${numero2} es: ${resultadoSuma}`)


    
}