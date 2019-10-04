let user;
fetch('https://randomuser.me/api/')
    .then(data=>data.json())
    .then(data=>{
        user = data.results[0];
        document.getElementById('image').src = `${user.picture.large}`;
        document.getElementById('label').innerHTML = 'My name is : ';
        document.getElementById('info').innerHTML = `${user.name.first} ${user.name.last} `;
    })
    .catch(err=>console.log(err));

    let email = document.getElementById('email');
    email.addEventListener('mouseover', function(){
        document.getElementById('label').innerHTML = 'My email is : ';
        document.getElementById('info').innerHTML = `${user.email}`;

    })
    let people = document.getElementById('people');
    people.addEventListener('mouseover', function(){
        document.getElementById('label').innerHTML = 'My name is : ';
        document.getElementById('info').innerHTML = `${user.name.first} ${user.name.last} `;
    })