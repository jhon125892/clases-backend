function fnPrimera() 
{
    let precio= document.querySelector('.txtPrecio').value
    let cantidad= document.querySelector('.txtCantidad').value

    console.log('Precio ingresado:', precio);
    console.log('Cantidad ingresada:', cantidad);

    let precioTotal= parseFloat(precio) * parseInt(cantidad);
    console.log(`Precio total: ${precioTotal}`);

    document.getElementById('precioTotal').innerHTML= `Precio total: ${precioTotal}`

    let precioFinal= fnSegunda(precioTotal)
     document.getElementById('precioReal').innerHTML= `Precio con descuento: ${precioFinal}`
}

//

function fnSegunda(precioTotal)
{
    let descuento=document.getElementById('txtDescuento').value
    
    let descuentoDecimal= parseFloat(descuento) / 100;
    let precioReal= precioTotal-(precioTotal * descuentoDecimal);
    
    return precioReal
}