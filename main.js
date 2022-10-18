//CREO LA CLASE DE PRODUCTOS

class productos{
    constructor(id,instrumento,modelo,precio,stock){
        this.id = id;
        this.instrumento = instrumento;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    //HAGO UN METODO PARA RESTAR STOCK AL VENDER
    restaStock(){
        this.stock = this.stock - 1;
        console.log("Se ha actualizado el stock")
    }

    sumaIva(){
        this.precio = (this.precio) + (this.precio * 0.21)
    }
}

//CREAMOS LOS PRODUCTOS

const prouducto0 = new productos(0,"Guitarra Acustica","Fender FA-125",113000,5);
const prouducto1 = new productos(1,"Guitarra Criolla","Yamaha C45",56000,10);
const prouducto2 = new productos(2,"Guitarra Electrica","Gibson Les Paul",400000,2);
const prouducto3 = new productos(3,"Guitarra Electrica","Fender Telecaster",5170000,1);
const prouducto4 = new productos(4,"Bajo","Fender Precision Bass",350000,1);
const prouducto5 = new productos(5,"Bajo","Squier Jazz Bass",130000,4);
const prouducto6 = new productos(6,"Ukelele","Ibanez Uks10e",43000,15);
const prouducto7 = new productos(7,"Bateria electrica","Yamaha Hitman HD4",163000,3);
const prouducto8 = new productos(8,"Teclado","Casio CT-5100",44000,10);

const misProductos = [prouducto0, prouducto1,prouducto2,prouducto3,prouducto4,prouducto5,prouducto6,prouducto7,prouducto8];

//MENSAJE EN PANTALLA PARA ELEGIR PRODUCTO

let mensajePantalla = "Por favor, elegir segun el ID el producto a llevar:\n"

for (elemento of misProductos) {
    mensajePantalla += `${elemento.id} - ${elemento.instrumento} - ${elemento.modelo} a $${elemento.precio}\n`
}

let opcionUser = parseInt(prompt(mensajePantalla));

//LUEGO DE ELEGIR EL PRODUCTO, QUE NOS MUESTRE EN PANTALLA LO ELEGIDO - CON EL METODO FIND COMPARO EL VALOR DADO POR EL USER CON lA PROPIEDAD DEL OBJETO SELECCIONADA

const productoElegido = misProductos.find(elemento => elemento.id == opcionUser);


alert(`Has elegido ${productoElegido.instrumento} - ${productoElegido.modelo} a $${productoElegido.precio}`)

//PREGUNTAR SI DESEA COMPRAR CON TARJETA CON UN RECARGO DEL 21%
let opcion = prompt(`Elija el medio de pago.\nSi ud paga con tarjeta se informa que se le tendra que agregar al valor final el 21% correspondiente al IVA\n1- Efectivo\n2- Tarjeta`);

if (opcion == 1) {
    alert(`Muchas gracias por su compra, disfrute su ${productoElegido.instrumento} ${productoElegido.modelo}`);
} else if(opcion == 2) {
    productoElegido.sumaIva();
    alert("Gracias, disfrute de su compra. El precio total mas IVA es de: $" +productoElegido.precio);
}else{
    alert("ha ocurrido un error en la matrix")
}


productoElegido.restaStock();

console.log(`Actualmente quedan ${productoElegido.stock} unidades de ${productoElegido.instrumento}-${productoElegido.modelo}`);
