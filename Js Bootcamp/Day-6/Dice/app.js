function roll(){
    let roll=Math.floor(Math.random()*6);
    let dice=document.getElementById('dice');
    dice.innerText= '';
    dice.classList.add('roller');
    let audio=document.getElementById('audio');
    audio.play()
    setTimeout(()=>{
        dice.classList.remove('roller')
        dice.innerText= roll+1;
    },1000)
}

