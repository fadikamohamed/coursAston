let images = ['pierre': 'assets/img/pierre.png', 'feuille': 'assets/img/feuille.png', 'feuille': 'assets/img/ciseaux.png']
let compNumber = Math.floor(Math.random() * 3);
console.log(compNumber);
let element = document.getElementById('submit');
element.onclick = function () {
    let result = document.querySelector('input[name=janken]:checked').value;
    console.log(result);

        let diff = compNumber - result;
        console.log(diff);

        if (diff == 1 || diff == -2) {

            alert(`Vous avez Perdu ! `);
            window.location.reload();
        } else if (diff == -1 || diff == 2) {
            alert(`Vous avez Gagner ! `);
            window.location.reload();
        } else {
            alert(`Egalité ! `);
            window.location.reload();
        }

}
