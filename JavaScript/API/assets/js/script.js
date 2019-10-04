let target = document.getElementById('target');
let name;
let email;
let birthday;
let address;
let phone;
let password;
let dataObject;
fetch('https://randomuser.me/api/')
.then(data => data.json())
.then(data => {
    dataObject = data.results[0];
    name = `${dataObject.name.first} ${dataObject.name.last}`;
    email = `${dataObject.email}`;
    birthday = `${dataObject.dob.date}`;
    address = `${dataObject.location.street.number} ${dataObject.location.street.name}`;
    phone = `${dataObject.phone}`;
    password = `${dataObject.login.password}`;
    target.innerHTML = `
    <div class="targetTop">
        <img id="picture" src="${dataObject.picture.large}" alt="">
    </div>
    <div id="parag" class="parag">
        <p class="label">I my name is</p>
        <p class="data">${dataObject.name.first} ${dataObject.name.last}</p>
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

function inner(arg1, arg2){
    parag.innerHTML = `
    <p class="label">${arg1}</p>
    <p class="data">${arg2}</p>
    `}

function showData(id){
    /*name*/
    if(id == 'name'){
        inner('I my name is', name);
        /*email */
    }else if(id == 'email'){
        inner('I my email is', email);
        /* birthday */
    }else if(id == 'birthday'){
        inner('I my birthday is', birthday);
        /* address */
    }else if(id == 'address'){
        inner('I my address is', address);
        /* phone */
    }else if(id == 'phone'){
        inner('I my phone is', phone);
        /* password */
    }else if(id == 'password'){
        inner('I my password is', password);
    }
}