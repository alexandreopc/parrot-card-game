let numeroDeCartas = 0;
const arrayCartas = ["carta1", "carta1", "carta2", "carta2", "carta3", "carta3", "carta4", "carta4",  "carta5",  "carta5", "carta6", "carta6", "carta7", "carta7"];
let arrayCartasEscolhidas = arrayCartas.slice();
let cartasSelecionadas = 0;
let nome1Par = "";
let nome2Par = "";
let jogadas = 0;

function escolherNCartas(){
    numeroDeCartas = prompt("Com quantas cartas gostaria de jogar?");
    if(numeroDeCartas%2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        escolherNCartas();
    }
}

function distribuirCartas(){//quando 4 cartas nao deixa aleatoio
    let x = arrayCartasEscolhidas.length - numeroDeCartas;
    for(let i = 0; i < x; i++){
        arrayCartasEscolhidas.pop();
    }
    arrayCartasEscolhidas.sort(comparador);
    console.log(arrayCartasEscolhidas);
    let cartas = document.querySelector(".container-cartas");
    cartas.innerHTML = "";
    for(let i = 0; i < arrayCartasEscolhidas.length; i++){ //<li class="card ${arrayCartasEscolhidas[i]}" onclick="selecionarCarta(this, ${i})">
        cartas.innerHTML += `
        <li class="${arrayCartasEscolhidas[i]} card" onclick="selecionarCarta(this, ${i})">
            <div class="card-back card-face">
            </div>
            <!-- ${arrayCartasEscolhidas[i]} --> 
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
    }
    verificaVitoria();
}

function verificaVitoria(){
    const cartas = document.querySelectorAll(".par");
    if(cartas.length === parseInt(numeroDeCartas)){
        alert(`Você ganhou em ${jogadas} jogadas!`);
        let resposta = prompt(`Gostaria de Jogar novamente? (s/n)`);
        if(resposta === "s" || resposta === "S" || resposta === "sim" || resposta === "Sim" || resposta === "SIM"){
            console.log("asdadssasdsadasda");
        }
        else{console.log("blzzzzzzz");}

    }
}

escolherNCartas();

distribuirCartas();
