let precioOferta = 44999;
let quiereComprar = prompt(
    "Hay una oferta por un compresor de corsa Mahle de $" +
    precioOferta +
    " deseas comprarla? Ingresa Si o No"
).toLowerCase();

while (quiereComprar != "si" && quiereComprar != "no" && quiereComprar != "salir") {
    quiereComprar = prompt("Por favor responda si, no o salir");
}

while (quiereComprar === "si") {
    let metodoDePago = prompt("Deseas abonarlo con efectivo, debito, credito o salir?").toLowerCase();
    while (
        metodoDePago != "efectivo" &&
        metodoDePago != "debito" &&
        metodoDePago != "credito" &&
        metodoDePago != "salir"
    ) {
        metodoDePago = prompt("Por favor responda efectivo, debito, credito o salir");
    }
    if(metodoDePago === "salir") {
        break;
    }
    switch (metodoDePago) {
        case "efectivo":
            const descuento = precioOferta * 0.1;
            const precioFinal = precioOferta - descuento;
            alert(
                "Por pagar en efectivo se te descuenta un 10% siendo el total de $" +
                precioFinal
            );
            break;
        case "credito":
            let cuotas = prompt("Vas a pagar con 3, 6 o 12 cuotas?");
            while (cuotas != "3" && cuotas != "6" && cuotas != "12") {
                cuotas = prompt("Por favor responda 3, 6 o 12 cuotas");
            }
            const precioCuotas = precioOferta / cuotas;
            alert(
                "Al pagar con credito el valor de cada cuota es de $" +
                precioCuotas.toFixed(2)
            );
            break;
        default:
            alert("El precio total es de $" + precioOferta);
            break;
    }
    alert("¡Felicidades compraste tu compresor!")
    break;
}
