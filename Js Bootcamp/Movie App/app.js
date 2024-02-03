let api='http://www.omdbapi.com/?apikey=3bf6689a&t='

let poster=document.querySelector('.poster');
let title=document.getElementById('title');
let director=document.getElementById('director');
let actor=document.getElementById('actor');
let awards=document.getElementById('awards');
let desc=document.getElementById('Desc');
let collection=document.getElementById('Collection');
let date=document.getElementById('date');
let rating=document.getElementById('Rating');
let writer=document.getElementById('writer');
let genre=document.getElementById('genre');

let notfound=document.getElementById('notfound');
let found=document.getElementById('found');

function search(){
    let movie=document.getElementById('movie');
    let query=api+movie.value;

    fetch(query).then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
        if(data.Error){
            notfound.classList.remove('d-none');
            found.classList.add('d-none');
            document.getElementById('name').innerText=movie.value;
        }
        else{
            found.classList.remove('d-none');
            notfound.classList.add('d-none');
            title.innerText=data.Title;
            desc.innerText=data.Plot;
            actor.innerText=data.Actors;
            awards.innerText=data.Awards;
            director.innerText=data.Director;
            collection.innerText=data.BoxOffice;
            date.innerText=data.Released;
            rating.innerText=data.imdbRating;
            poster.src=data.Poster;
            genre.innerText=data.Genre;
            writer.innerText=data.Writer;

        }
    })
}