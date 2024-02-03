let users = []
let usercontainer = document.getElementById('usercontainer');
let city = ['Madurai', 'Chennai', 'Banglore', 'Mumbai', 'Kochi'];



// function render() {
//     let div = document.createElement('div');
//     let nameinput = document.createElement('div');
//     let cityinput = document.createElement('div');

//     nameinput.innerText = "Name:" + Name.value;
//     cityinput.innerText = "Exam Center:" + cityvalue;

//     usercontainer.appendChild(div);
//     div.appendChild(nameinput);
//     div.appendChild(cityinput);

//     div.classList.add('bg');
// }
function register() {
    let Name = document.getElementById('name');
    let cityvalue = city[Math.floor(Math.random() * city.length)];
    let email = document.getElementById('email');

    let user = {
        name: Name.value,
        email: email.value,
        city: cityvalue

    }
    console.log(cityvalue);
    users.push(user);

    let div = document.createElement('div');
    let nameinput = document.createElement('div');
    let cityinput = document.createElement('div');

    nameinput.innerText = "Name:" + Name.value;
    cityinput.innerText = "Exam Center:" + cityvalue;

    usercontainer.appendChild(div);
    div.appendChild(nameinput);
    div.appendChild(cityinput);

    div.classList.add('bg');

}