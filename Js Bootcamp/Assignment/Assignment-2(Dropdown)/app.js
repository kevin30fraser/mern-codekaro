let btn = document.querySelector('.btn');
let skills = document.querySelector('.skills');


let count=0;


btn.addEventListener('click', () => {
    if(count % 2==0){
        count=count+1;
        skills.classList.remove('d-none');
    }

    else{
        count=count+1;
        skills.classList.add('d-none');

    }
})


