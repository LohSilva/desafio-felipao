//Usada para solicitar informações ao usuário.
const prompt = require('prompt-sync')();

//Declarando as variáveis
let nomeHeroi = prompt("Digite o nome do herói: ");
let pontosXPHeroi= prompt("Digite a quantidade de experiência do herói: ");

let nivel = "";

// Verifica a quantidade de XP do herói e define o nível de acordo com a faixa de XP.
if (pontosXPHeroi <= 1.000){
    nivel = "Ferro";
}else if (pontosXPHeroi >= 1.001 && pontosXPHeroi <= 2.000){ 
    nivel = "Bronze";
}else if (pontosXPHeroi >= 2.001 && pontosXPHeroi <= 5.000){
    nivel = "Prata";
}else if (pontosXPHeroi >= 5.001 && pontosXPHeroi <= 7.000){
    nivel = "Ouro";
}else if (pontosXPHeroi >= 7.001 && pontosXPHeroi <= 8.000){
    nivel = "Platina";
}else if (pontosXPHeroi >= 8.001 && pontosXPHeroi <= 9.000){
    nivel = "Ascendente";
}else if (pontosXPHeroi >= 9.001 && pontosXPHeroi <= 10.000){
    nivel = "Imortal";
}else{
    nivel = "Radiante";
}

// Exibe o nome do herói e seu nível.
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);