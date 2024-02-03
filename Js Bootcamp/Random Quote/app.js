
let quote=document.getElementById('quote');
let author=document.getElementById('author');


function fetchquote(){
    fetch('https://type.fit/api/quotes').then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
        let random=Math.floor(Math.random()*data.length);
        quote.innerText=data[random].text;
        author.innerText=data[random].author;
    })
}

fetchquote();