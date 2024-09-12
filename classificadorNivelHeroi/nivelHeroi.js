// Solicita o nome e a quantidade de experiência do herói
let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Variável para armazenar o nível do herói
let nivel = "";

// Classificação do herói com base no XP usando switch
switch (true) {
    case (xpHeroi < 1000):
        nivel = "Ferro";
        break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
        nivel = "Bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
        nivel = "Prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
        nivel = "Platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        break;
}

// Exibe a mensagem final com o nome e o nível do herói
alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
