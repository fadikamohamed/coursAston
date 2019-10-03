let resultats;
let cible = document.getElementById('cible');
fetch('https://api.punkapi.com/v2/beers')
    .then(data => data.json())
    .then(data => {
        for(i = 0; i < data.length; i++){
            cible.innerHTML += `
            <div class="bierre">
                <img src="${data[i].image_url}">
                <p>${data[i].name}</p>
            </div>`;
        }
    })
    .catch(err => console.log(err))
