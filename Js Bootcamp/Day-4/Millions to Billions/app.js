
function convert(){
    let million=document.getElementById('million');
    let convert=million.value/1000;
    let result=document.getElementById('result');
    result.innerText= "Converted Value:"+convert+'Billion';
}