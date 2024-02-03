let num=[10,15,20,25,30,45,50];

let arr=num.find(function(item){
    return item%3==0;
});

console.log(arr);

// Returns only the First item which gets divisible by 3

// item is a variable container which is used to store the input values that are 
// mentioned inside the array these variable are being used inorder to define 
// the logic