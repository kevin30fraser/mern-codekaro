
let users=[]

let usercontainer=document.getElementById('usercontainer');
let alert=document.getElementById('alert');


function render(){
    usercontainer.innerText='';

    for(let i=0;i<users.length;i++){
        let div=document.createElement('div');
        let nameinput=document.createElement('div');
        let ageinput=document.createElement('div');
        
        nameinput.innerText=users[i].name;
        ageinput.innerText=users[i].age;

        usercontainer.appendChild(div);
        div.appendChild(nameinput);
        div.appendChild(ageinput);

        div.classList.add('bg');
    }
}


function showalert(){
    alert.classList.remove('d-none');
    alert.classList.add('alert');


    setTimeout(()=>{
       alert.classList.add('d-none');
       alert.classList.remove('alert');
    },3000)
}



function register(){
    let name=document.getElementById('name');
    let age=document.getElementById('age');
    let user={
        name:name.value,
        age: age.value
    }
   // store only users age between 16-18

   if(user.age>=16 && user.age<=18){
     users.push(user);
     alert.innerText='User data updated Successfully !!';
     showalert();
     render();
   }
   else{
    alert.innerText='User is not Eligible !!';
    showalert();
   }
    
}

console.log(users);