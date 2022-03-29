const formulario = document.getElementById('cotizacion');
let contenedor = document.getElementById('contenedorResultado');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let precioFinal = cotizarViaje();
    //alert('El valor de su viaje es de: ' + precioFinal)

   
    
    contenedor.append('El precio de su viaje es de: ' + precioFinal);
    //document.getElementById('contenedorResultado').innerHTML = ('El precio de su viaje es de: ' + precioFinal )
    
})


const cotizarViaje = () => {
    
    const destino = document.getElementById('inputDestino').value;
    const personas = document.getElementById('inputPersonas').value;
    let precio;

    switch (destino) {
        case 'Santa Marta':
            precio = 600000;
            break;
        case 'Cartagena':
            precio = 550000;
            break;
        case 'Eje Cafetero':
            precio = 700000;
            break;
        default:
            precio = 1;
            break;
    }

    return precio * personas;
    
}


localStorage.setItem('Usuario' , 'Sebastián')
