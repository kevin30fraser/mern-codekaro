let body=document.querySelector('body');
let title=document.getElementById('title');

let colors=['red','blue','orange','green','black']



function change(){
    let random= colors[Math.floor(Math.random()* colors.length)];
    body.style.backgroundColor=random;
    title.style.color='white';
    console.log(random);
}

change();