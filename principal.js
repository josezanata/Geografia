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

//calcular o IMC dividindo o peso por altura e vezes a altura
var IMC = peso / (altura * altura);
var imc1 = paciente.querySelector(".info-imc");
text.content = IMC

console.log(Altura);