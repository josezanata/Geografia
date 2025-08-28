//buscar os elementos a partir da classe e atribui novo valor
var pacients = document.querySelector("h2");
var Título = document.querySelector("h1");
pacients.textContent = "my patients";
Título.textContent = "zanatta Nutrição";

//crai a variáve, buscar i elemento a pertir da classe e altura
var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".infopeso");
var peso = tdPeso.textContent;

//buscar o elemento dqaa altura e altera seu conteúdo
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

if(pesoValido && alturaValida){
    var tdimc1 = paciente.querySelector(".info-imc");
    tdIMC.textcontent = IMC;
}

//calcular o IMC dividindo o peso por altura e vezes a altura
var IMC = peso / (altura * altura);

//Valorez booleanos
var pesoValido = true;
var alturaValida = true;

//Alerta caso o peso e altura sejam inválidos
if(peso <= 0 || peso >= 1000 ){
    var pesoValido = false;
    alert("Peso Inválido");
}

//Alerta caso a altura seja inválida
if(altura <= 0 || altura >= 3.00 ){
    alert("Altura Inválida");
    var alturaValida = false;
}

if(pesoValido && alturaValida){
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC;
}