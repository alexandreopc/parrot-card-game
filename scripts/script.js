let numeroDeCartas;
const arrayCartas = ["carta1", "carta1", "carta2", "carta2", "carta3", "carta3", "carta4", "carta4",  "carta5",  "carta5", "carta6", "carta6", "carta7", "carta7"];
let arrayCartasEscolhidas = arrayCartas.slice();

function escolherNCartas(){
    numeroDeCartas = prompt("Com quantas cartas gostaria de jogar?");
    if(numeroDeCartas%2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        escolherNCartas();
    }
}

function distribuirCartas(){
    let x = arrayCartasEscolhidas.length - numeroDeCartas;
    for(let i = 0; i < x; i++){
        arrayCartasEscolhidas.pop();
    }
    let cartas = document.querySelector(".container-cartas");
    cartas.innerHTML = "";
    for(let i = 0; i < arrayCartasEscolhidas.length; i++){
        cartas.innerHTML += `
        <li class="carta ${arrayCartasEscolhidas[i]}">
            <div class="front-face face">
            </div>
            <div class="back-face face">
            </div>
        </li>
        `;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}
escolherNCartas();
//console.log(numeroDeCartas);
distribuirCartas();

//arrayCartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
//console.log(arrayCartas);
//console.log(numeroDeCartas);
