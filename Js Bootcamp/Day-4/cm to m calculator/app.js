function convert(){
    let cm=document.getElementById('cm');
    //Logic//
    let m= cm.value*100;
    let calculate="Converted Value:"+m;
    let result=document.getElementById('result');
    result.innerText=calculate;

}