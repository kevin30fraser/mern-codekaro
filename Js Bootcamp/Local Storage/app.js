
localStorage.setItem('shirtprice',399);
let storage=localStorage.getItem('shirtprice');
let price=document.getElementById('price');
price.innerText=storage;


function increase(){
    setTimeout(()=>{
        localStorage.setItem('shirtprice',499);
        let storage=localStorage.getItem('shirtprice');
        price.innerText=storage;
    },2000)
}

let themebtn=document.getElementById('theme');
let card=document.querySelector('.card');
let body=document.querySelector('body');



function rendertheme(){
    let theme=localStorage.getItem('theme');
    if(theme=='light'){
        document.getElementById('theme').innerHTML=<i class="bi bi-brightness-high"></i>
        body.style.backgroundcolor='white';
        themebtn.style.color='black';
        card.style.color='black';
    }
    else{
        document.getElementById('theme').innerHTML=<i class="bi bi-moon-stars"></i>
        body.style.backgroundcolor='#242424';
        themebtn.style.color='white';
        card.style.color='white';
        card.style.bordercolor='#333333';

    }
}



function updatetheme(){
    let theme=localStorage.getItem('theme');
    if(theme=='light'){
        localStorage.setItem('theme','light');
        rendertheme()
    }
    else{
        localStorage.setItem('theme','dark');
        rendertheme()
    }
}