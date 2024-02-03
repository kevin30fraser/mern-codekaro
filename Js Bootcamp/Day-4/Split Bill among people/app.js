function calculate(){
    let amt=document.getElementById('amount');
    let per=document.getElementById('person');
    let calculate=(amt.value/per.value).toFixed(1);
    let result=document.getElementById('result');
    result.innerText="The amount To be Splited:"+calculate;

}