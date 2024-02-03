
let alert=document.getElementById('alert');

function showalert(){
    alert.classList.remove('d-none');
    alert.classList.add('alert');

    setTimeout(()=>{
        alert.classList.remove('alert');
        alert.classList.add('d-none');
    },4000)
}

    let fooditems=document.querySelectorAll('.card');
    fooditems.forEach((item)=>{
      item.addEventListener('click',(e)=>{
       alert.innerText='Order Placed Successfully:'+item.dataset.title + " "+ 'Amount to be Payed:'+ item.dataset.price;
       showalert();
       // console.log(item.dataset.title,item.dataset.price);
      })
    })