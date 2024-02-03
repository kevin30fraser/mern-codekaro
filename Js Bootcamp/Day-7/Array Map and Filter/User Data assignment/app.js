
let users = [];
let usercontainer = document.getElementById('usercontainer');
let nam = document.getElementById('name');
let alert = document.getElementById('alert');


function showalert() {

    alert.classList.remove('d-none');
    alert.classList.add('alert');

    setTimeout(() => {
        alert.classList.remove('alert');
        alert.classList.add('d-none');
    }, 3000);
}

function render() {
    let div = document.createElement('div');
    let nameinput = document.createElement('div');
    let emailinput = document.createElement('div');


    nameinput.innerText = nam.value;
    emailinput.innerText = email.value;


    usercontainer.appendChild(div);
    div.appendChild(nameinput);
    div.appendChild(emailinput);

    div.classList.add('bg');
}


function register() {

    let email = document.getElementById('email');


    let userexist = users.filter((data) => {
        return data.email == email.value;
    })

    console.log('Filter user', userexist);

    let user = {
        name: nam.value,
        email: email.value
    }

    if (userexist.length == 0) {
        users.push(user);
        render();
        alert.innerText='User Added Successfully';
        showalert();
    }
    else {
        alert.innerText='Email Already Exist';
        showalert();
    }


    console.log(users);
}



