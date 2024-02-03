let num=[10,15,20,30,45,50];

let arr=num.findIndex(function(item){
    return item%3==0;
});

console.log(arr);

// Mentions the index of the first item that is to be divisible
// by 3