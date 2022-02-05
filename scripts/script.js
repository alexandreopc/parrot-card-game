let numeroDeCartas;
const arrayCartas = ["carta1", "carta1", "carta2", "carta2", "carta3", "carta3", "carta4", "carta4",  "carta5",  "carta5", "carta6", "carta6", "carta7", "carta7"];
let arrayCartasEscolhidas = arrayCartas.slice();
let cartasSelecionadas = 0;

function escolherNCartas(){
    numeroDeCartas = prompt("Com quantas cartas gostaria de jogar?");
    if(numeroDeCartas%2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        escolherNCartas();
    }
    console.log(numeroDeCartas);
}

function distribuirCartas(){//quando 4 cartas nao deixa aleatoio
    let x = arrayCartasEscolhidas.length - numeroDeCartas;
    for(let i = 0; i < x; i++){
        arrayCartasEscolhidas.pop();
    }
    arrayCartasEscolhidas.sort(comparador);
    let cartas = document.querySelector(".container-cartas");
    cartas.innerHTML = "";
    for(let i = 0; i < arrayCartasEscolhidas.length; i++){ //<li class="card ${arrayCartasEscolhidas[i]}" onclick="selecionarCarta(this, ${i})">
        cartas.innerHTML += `
        <li class="${arrayCartasEscolhidas[i]} card" onclick="selecionarCarta(this, ${i})">
            <div class="card-back card-face">
            </div>
            <div class="card-front card-face">
            </div>
        </li>
        `;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function selecionarCarta(li, i){
    if(cartasSelecionadas <= 1){
        li.classList.toggle("selecionada");
        const cartas = document.querySelectorAll(".selecionada");
        cartasSelecionadas = cartas.length;
    }if(cartasSelecionadas == 2){
        const cartas = document.querySelectorAll(".selecionada");
        cartas[0].classList.remove("selecionada");
        cartas[1].classList.remove("selecionada");
        cartasSelecionadas = 0;
    }
    console.log(cartasSelecionadas);
    
}


escolherNCartas();
distribuirCartas();
