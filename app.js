let acumuladorNumero = []
let numerosIngresados = prompt("ingrese numeros");

while(numerosIngresados !== null){
    numerosIngresados = prompt("ingrese numeros")
    acumuladorNumero.push(numerosIngresados)

    if(isNaN(numerosIngresados) || numerosIngresados == " "){
        alert("Ingrese solamente numeros")
        acumuladorNumero.pop()
    }
}

console.log(acumuladorNumero);
