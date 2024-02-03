function mousein() {
    console.log('Mouse is inside');
}

function mouseout() {
    console.log('Mouse is outside');
}

function cardclicked() {
    console.log('Mouse is clicked');
}


function test() {
    let nam = document.getElementById('name');
    let stat = nam.value
    let data = document.getElementById('data')
    let count = stat.length;

    if (count <= 3) {
        nam.classList.add('input-danger');
        data.innerText = 'Enter More than 4 char';
    }

    else {
        nam.classList.remove('input-danger');
        nam.classList.add('input-success');
        data.innerText = 'Good to Go';
    }
}