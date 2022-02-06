//fonte titulo quando mobile

let numeroDeCartas = 0;
const arrayCartas = ["carta1", "carta1", "carta2", "carta2", "carta3", "carta3", "carta4", "carta4",  "carta5",  "carta5", "carta6", "carta6", "carta7", "carta7"];
let arrayCartasEscolhidas = arrayCartas.slice();
let cartasSelecionadas = 0;
let nome1Par = "";
let nome2Par = "";
let jogadas = 0;
let minutos = 0;
let segundos = 0;
let cron;

function escolherNCartas(){
    numeroDeCartas = prompt("Com quantas cartas gostaria de jogar?");
    if(numeroDeCartas%2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        escolherNCartas();
    }
    distribuirCartas();
}

function distribuirCartas(){
    let x = arrayCartasEscolhidas.length - numeroDeCartas;
    for(let i = 0; i < x; i++){
        arrayCartasEscolhidas.pop();
    }
    arrayCartasEscolhidas.sort(comparador);
    console.log(arrayCartasEscolhidas);
    let cartas = document.querySelector(".container-cartas");
    cartas.innerHTML = "";
    for(let i = 0; i < arrayCartasEscolhidas.length; i++){ 
        cartas.innerHTML += `
        <li class="${arrayCartasEscolhidas[i]} card" onclick="selecionarCarta(this, ${i})" data-identifier="card">
            <div class="card-back card-face" data-identifier="back-face">
            </div>
            <!-- ${arrayCartasEscolhidas[i]} --> 
            <div class="card-front card-face" data-identifier="front-face">
            </div>
        </li>
        `;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function selecionarCarta(li, i){
    jogadas++;
    if(cartasSelecionadas <= 1){
        li.classList.toggle("selecionada");
        const cartas = document.querySelectorAll(".selecionada");
        cartasSelecionadas = cartas.length;
    }
    if(cartasSelecionadas == 1){ 
        nome1Par = li.innerHTML;
     }else{
        nome2Par = li.innerHTML;
     }
    if(cartasSelecionadas == 2){
        setTimeout(verificaPar, 1000);
    }
    
}

function verificaPar() {
    const cartas = document.querySelectorAll(".selecionada");
    if(nome1Par === nome2Par){
        cartas[0].classList.add("par");
        cartas[1].classList.add("par");
        cartas[0].classList.remove("selecionada");
        cartas[1].classList.remove("selecionada");
        cartasSelecionadas = 0;
        nome1Par = "";
        nome2Par = "";
    }
    else{
        cartas[0].classList.remove("selecionada");
        cartas[1].classList.remove("selecionada");
        cartasSelecionadas = 0;
        nome1Par = "";
        nome2Par = "";
    }
    verificaVitoria();
}

function verificaVitoria(){
    const cartas = document.querySelectorAll(".par");

    if(cartas.length === parseInt(numeroDeCartas)){
        alert(`Você ganhou em ${jogadas} jogadas!
        Tempo gasto ${minutos}:${segundos}`);
        let resposta = prompt(`Gostaria de Jogar novamente? (s/n)`);
        if(resposta === "s" || resposta === "S" || resposta === "sim" || resposta === "Sim" || resposta === "SIM"){
            reinciaJogo();
        }
        else {
            console.log("Nada acontece");
            clearInterval(cron);
        }


    }
}

function reinciaJogo(){
    numeroDeCartas = 0;
    arrayCartasEscolhidas = arrayCartas.slice();
    cartasSelecionadas = 0;
    nome1Par = "";
    nome2Par = "";
    jogadas = 0;
    segundos = 0;
    minutos = 0;
    escolherNCartas();
}

function cronometro(){
    segundos++;
    if(segundos==60){
        minutos++;
        segundos = 0;
        document.querySelector(".min").innerHTML = `${minutos}:`;
    }
    if(segundos < 10){
        document.querySelector(".seg").innerHTML = `0${segundos}`;
    }else{document.querySelector(".seg").innerHTML = `${segundos}`;}
    
}
cron = setInterval(cronometro, 1000);
escolherNCartas();


