//SE INICIALIZA LA FUNCION DE CALCULO, SE DECLARAN VARIABLES
function calculo(){
    let cat = document.getElementById('categoria').value;
    let cantidad = document.getElementById('cantidad').value;
    const valor = 200;
    let descuento;
    let total;

//SE RESUELVEN LOS DISTINTOS ESCENARIOS MEDIANTE EL CONDICIONAL IF    
if (cat==0) {
    descuento=1    
    total=((cantidad * valor)*descuento);
    document.getElementById("resultado").innerHTML = "Total a pagar es: $ " + total;
    alert("Gracias por su compra");
}
else if (cat==1) {
    descuento=0.2 
    total=((cantidad * valor)*descuento);
    document.getElementById("resultado").innerHTML = "Total a pagar es: $ " + total;
    alert("Gracias por su compra");
}
else if (cat==2) {
    descuento=0.5 
    total=((cantidad * valor)*descuento);
    document.getElementById("resultado").innerHTML = "Total a pagar es: $ " + total;
    alert("Gracias por su compra");
}
else if (cat==3) {
    descuento=0.85 
    total=((cantidad * valor)*descuento);
    document.getElementById("resultado").innerHTML = "Total a pagar es: $ " + total;
    alert("Gracias por su compra");
}
}
function borrar(){
    document.getElementById("resultado").innerHTML = "Total a pagar es: $ " + "";
}