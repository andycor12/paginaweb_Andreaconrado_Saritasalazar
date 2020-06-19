function sumar(){
var num1=parseInt(document.getElementById('valor1').value);
var num2=parseInt(document.getElementById('valor2').value);
var suma= num1 + num2;
document.form.resultado.value=suma;
}

function restar(){
    var num1=parseInt(document.getElementById('valor1').value);
    var num2=parseInt(document.getElementById('valor2').value);
    var resta= num1 - num2;
    document.form.resultado.value=resta;
    }