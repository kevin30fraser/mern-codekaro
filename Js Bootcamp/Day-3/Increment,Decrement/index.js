

let counter=0;

function increment(){
    counter=counter+1;
    let count= document.getElementById('counter')
    count.innerText=counter;
}

function decrement(){
    if(counter>0){
        counter=counter-1;
        let count= document.getElementById('counter')
        count.innerText=counter;
    }
}