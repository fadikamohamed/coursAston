let target = document.getElementById('target');
fetch('https://randomuser.me/api/')
.then(data => data.json())
.then(data => {
    target.innerHTML = `
    <div class="targetTop">
        <img id="picture" src="${data.results[0].picture.large}" alt="">
    </div>
    <div class="parag">
        <p class="label">I my name is</p>
        <p class="data">${data.results[0].name.first} ${data.results[0].name.first}</p>
    </div>
    <div>
        <img src="" alt="" class="icons">
        <img src="" alt="" class="icons">
        <img src="" alt="" class="icons">
        <img src="" alt="" class="icons">
        <img src="" alt="" class="icons">
        <img src="" alt="" class="icons">
    </div>
    `
})