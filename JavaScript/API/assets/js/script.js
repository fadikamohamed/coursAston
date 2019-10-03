let target = document.getElementById('target');
let name;
let email;
let birthday;
let address;
let phone;
let password;
fetch('https://randomuser.me/api/')
.then(data => data.json())
.then(data => {
    name = `${data.results[0].name.first} ${data.results[0].name.last}`;
    email = `${data.results[0].email}`;
    birthday = `${data.results[0].dob.date}`;
    address = `${data.results[0].location.street.number} ${data.results[0].location.street.name}`;
    phone = `${data.results[0].phone}`;
    password = `${data.results[0].login.password}`;
    target.innerHTML = `
    <div class="targetTop">
        <img id="picture" src="${data.results[0].picture.large}" alt="">
    </div>
    <div id="parag" class="parag">
        <p class="label">I my name is</p>
        <p class="data">${data.results[0].name.first} ${data.results[0].name.last}</p>
    </div>
    <div class="dataNav">
        <ul>
            <li id="name" class="icons" onmouseover="showData('name')"></li>
            <li id="email" class="icons" onmouseover="showData('email')"></li>
            <li id="birthday" class="icons" onmouseover="showData('birthday')"></li>
            <li id="address" class="icons" onmouseover="showData('address')"></li>
            <li id="phone" class="icons" onmouseover="showData('phone')"></li>
            <li id="password" class="icons" onmouseover="showData('password')"></li>
        </ul>
    </div>
    `;
})

function showData(id){
    let parag = document.getElementById('parag');
    /*name*/
    if(id == 'name'){
        parag.innerHTML = `
        <p class="label">I my name is</p>
        <p class="data">${name}</p>
        `;
        /*email */
    }else if(id == 'email'){
        parag.innerHTML = `
        <p class="label">My email address is</p>
        <p class="data">${email}</p>
        `;
        /* birthday */
    }else if(id == 'birthday'){
        parag.innerHTML = `
        <p class="label">My birthday is</p>
        <p class="data">${birthday}</p>
        `;
        /* address */
    }else if(id == 'address'){
        parag.innerHTML = `
        <p class="label">My address is</p>
        <p class="data">${address}</p>
        `;
        /* phone */
    }else if(id == 'phone'){
        parag.innerHTML = `
        <p class="label">My phone number is</p>
        <p class="data">${phone}</p>
        `;
        /* password */
    }else if(id == 'password'){
        parag.innerHTML = `
        <p class="label">My password is</p>
        <p class="data">${password}</p>
        `;
    }
}