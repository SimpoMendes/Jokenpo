const resultPlayTheGame = document.querySelector(".result");
const spanYou = document.querySelector(".span-you");
const spanMachine = document.querySelector(".span-machine");
const descriptionResult = document.querySelector(".boa-sorte");

let scoreHumanNumber = 0
let scoreMchineNumber = 0

const playHuman = (humanchoice) => {

    PlayTheGame(humanchoice, playMachine())
};

const playMachine = () => {

    const choices = ["stone", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]

}

const PlayTheGame = (human, machine) => {
    let scorehum = 0
    let scoremac = 0

    if (human == machine) {
        resultPlayTheGame.innerHTML = "&#x1F643"
        descriptionResult.innerHTML = "Empatou"
    }
    else if ((human === "stone" && machine === "paper") ||
        (human === "scissors" && machine === "stone") ||
        (human === "paper" && machine === "scissors")) {
        resultPlayTheGame.innerHTML = "&#x1F612"
        descriptionResult.innerHTML = "Você Pedeu"
        scoreMchineNumber++
        spanMachine.innerHTML = scoreMchineNumber

    }

    else {
        resultPlayTheGame.innerHTML = "&#x1F60D"
        descriptionResult.innerHTML = "Você Ganhou"
        scoreHumanNumber++
        spanYou.innerHTML = scoreHumanNumber
    }
    console.log(` human escolheu ,   ` + human + `MaquinaEscolheu,  ` + machine)
}
function sum() {
    for (let scorehum = 0; i < human.length; i++) {

        resultPlayTheGame.innerHTML = sum()


    }

}