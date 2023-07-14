var nomejs = prompt("Qual seu nome?");
alert("Seja muito bem vindo " + nomejs +"!!");
var anojs = prompt("Em que ano você nasceu?");
var idadejs = 2023 - anojs;
var cidadejs = prompt("Qual cidade você mora?");
var estadojs = prompt(cidadejs+ " fica em qual estado?");
var maiormenor;
var beba;
    if( idadejs >= 18 ){
        maiormenor = "maior de idade, bora tomar uma cervejinha?";
        beba = "Beba com moderação!!"
    } else{
        maiormenor = "menor de idade e não pode tomar bebidas alcoólica.";
        beba = "";
    }
function dados (){
    var div = document.getElementById("mostrar");
    var botao = document.getElementById("botao");
    if (div.style.display === "none") {
        div.style.display = "flex";
        botao.innerText = "Ocultar informações";
        } else {
        div.style.display = "none";
        botao.innerText = "Ver informações";
        }
}