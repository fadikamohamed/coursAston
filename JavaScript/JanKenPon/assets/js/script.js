let janken = ['assets/img/pierre.png', 'assets/img/papier.png', 'assets/img/ciseaux.png'];
let cible = document.getElementById('cible');
let button = document.getElementById('submit');
button.onclick = function () {
    let compChoice = Math.floor(Math.random() * 3 + 1);
    let playerChoice = document.querySelector('input[name=janken]:checked').value;
    diff = playerChoice - compChoice;
    linkC = compChoice - 1;
    linkP = playerChoice - 1;
    console.log(linkC);
    console.log(linkP);
    if (diff == 1 || diff == -2) {
        cible.innerHTML = `
        <p class="result">Victoire !</p>
        <div class="battle">
            <div class="comp">
                <img src="${janken[linkC]}" alt="${janken[linkC]}">
                <p>Ordinateur !</p>
            </div>
            <p class="vs">VS</p>
            <div class="play">
                <img src="${janken[linkP]}" alt="${janken[linkP]}">
                <p>Player !</p>
            </div>
        </div>`
    } else if (diff == -1 || diff == 2) {
        cible.innerHTML = `
        <p class="result">Défaite !</p>
        <div class="battle">
            <div class="comp">
                <img src="${janken[linkC]}" alt="${janken[linkC]}">
                <p>Ordinateur !</p>
            </div>
            <p class="vs">VS</p>
            <div class="play">
                <img src="${janken[linkP]}" alt="${janken[linkP]}">
                <p>Player !</p>
            </div>
        </div>`
    } else {
        cible.innerHTML = `
        <p class="result">Egalité !</p>
        <div class="battle">
            <div class="comp">
                <img src="${janken[linkC]}" alt="${janken[linkC]}">
                <p>Ordinateur !</p>
            </div>
            <p class="vs">VS</p>
            <div class="play">
                <img src="${janken[linkP]}" alt="${janken[linkP]}">
                <p>Player !</p>
            </div>
        </div>`
    }

}