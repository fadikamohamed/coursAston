let mtx1 = { 1: 0, 2: 0, 3: 0 };
let mtx2 = { 1: 0, 2: 0, 3: 0 };
let mtx3 = { 1: 0, 2: 0, 3: 0 };
let player = 1;
let playerActif;
let winner;
let topPage = document.getElementById('topPage');
console.log('dfdvdfv');
function cases(id) {
    let cases = document.getElementById(id);
    array = id.substr(0, 4);
    index = id.substr(5, 5);
    switch (array) {
        case 'mtx1': mtx1[index] = player;
            break;
        case 'mtx2': mtx2[index] = player;
            break;
        case 'mtx3': mtx3[index] = player;
            break;
        default:
            break;
    }
    if (player == 1) {
        player = 2;
        playerActif = 'x';
    } else if (player == 2) {
        player = 1;
        playerActif = 'o';
    }
    cases.innerHTML = `<img src="assets/img/${playerActif}.png" alt="">`
    cases.removeAttribute("onclick");
    console.log(array);
    console.log(player);
    /*Diag gauche----------------------------------------------*/
    if (mtx1[1] === 1 && mtx2[2] === 1 && mtx3[3] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[1] === 2 && mtx2[2] === 2 && mtx3[3] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*Diag droit-------------------------------------------*/
    } else if (mtx1[3] === 1 && mtx2[2] === 1 && mtx3[1] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[3] === 2 && mtx2[2] === 2 && mtx3[1] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*vert droit--------------------------------------------*/
    } else if (mtx1[1] === 1 && mtx2[1] === 1 && mtx3[1] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[1] === 2 && mtx2[1] === 2 && mtx3[1] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*vert centre-------------------------------------------*/
    } else if (mtx1[2] === 1 && mtx2[2] === 1 && mtx3[2] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[2] === 2 && mtx2[2] === 2 && mtx3[2] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*vert gauche----------------------------------------*/
    } else if (mtx1[3] === 1 && mtx2[3] === 1 && mtx3[3] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[3] === 2 && mtx2[3] === 2 && mtx3[3] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*hor haut--------------------------------------------*/
    } else if (mtx1[1] === 1 && mtx1[2] === 1 && mtx1[3] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx1[1] === 2 && mtx1[2] === 2 && mtx1[3] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*haur center-----------------------------------------*/
    } else if (mtx2[1] === 1 && mtx2[2] === 1 && mtx2[3] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx2[1] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
        /*haur bas---------------------------------------------*/
    } else if (mtx3[1] === 1 && mtx3[2] === 1 && mtx3[3] === 1) {
        topPage.innerHTML = `Victoire pour le joueur 1 !`;
        winner = 1;
    } else if (mtx3[1] === 2 && mtx3[2] === 2 && mtx3[3] === 2) {
        topPage.innerHTML = `Victoire pour le joueur 2 !`;
        winner = 2;
    } else if (mtx1[1] !== 0 && mtx1[2] !== 0 && mtx1[3] !== 0 && mtx2[1] !== 0 && mtx2[2] !== 0 && mtx2[3] !== 0 && mtx3[1] !== 0 && mtx3[2] !== 0 && mtx3[3] !== 0) {
        alert(`Victoire du joueur ${winner} !`);
        mtx1 = { 1: 0, 2: 0, 3: 0 };
        mtx2 = { 1: 0, 2: 0, 3: 0 };
        mtx3 = { 1: 0, 2: 0, 3: 0 };
        /*window.location.reload();*/
    }
}