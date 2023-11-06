// declaração das variáveis
let nomeHeroi = "heroizinho"
let xpHeroi = 7500

// criação de uma const (frase), também faz parte da saída do programa
const frase = "O héroi de nome " + nomeHeroi + " está na experiência " + xpHeroi
console.log(frase)

// condições para descobrir em que nível está o nosso herói
if (xpHeroi < 1000) {
    console.log("Classificação: Nível FERRO")
}

else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    console.log("Classificação: Nível BRONZE")
}

else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    console.log("Classificação: Nível PRATA")
}

else if (xpHeroi > 6000 && xpHeroi <= 7000) {
    console.log("Classificação: Nível OURO")
}

else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    console.log("Classificação: Nível PLATINA")
}

else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    console.log("Classificação: Nível ASCENDENTE")
}

else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    console.log("Classificação: Nível IMORTAL")
}

else {
    console.log("Classificação: Nível RADIANTE")
}
