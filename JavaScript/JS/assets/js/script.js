let prenom = `mohamed`;

let cible = document.getElementById('cible');
cible.innerHTML = `${prenom}`;
cible.append(`${prenom}`);
Tableau
tableau = ['Lucas', 'Massi', 'Liva', 'Ben'];
console tableau
console.table(tableau);
Boucle for
for(i=0; i < tableau.length; i++){
    cible.append(`${tableau[i]}`);
}
let NumberTry = 0;
let number = Math.floor(Math.random() * 100);
console.log(number);
let cible = document.getElementById('cible');

if (NumberTry < 10) {
    let result = prompt('Trouvez le nombre');
    while (number !== result) {
        if (result >= 1 && result <= 100) {
            NumberTry++;
            let rest = 10 - NumberTry;
            if (number < result) {
                result = prompt(`Plus petit ! Il vous reste ${rest} essais !`);
            }
            if (number > result) {
                result = prompt(`Plus grand ! Il vous reste ${rest} essais !`);
            }
            if (number === result) {
                console.log(result);
                cible.innerHTML = `${result}! Bien joué !`;
            }
        }
    }
}
if (NumberTry > 10) {
    alert('Vous avez perdu !');
}

