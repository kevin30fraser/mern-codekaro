let users=[
    {
        firstname:'Kevin',
        lastname : 'Fraser',
        Age:'21',
        gender:'Male'

    },

    {
        firstname:'Melvin',
        lastname : 'Gabriel',
        Age:'28',
        gender:'Male'

    },
    

    {
        firstname:'Edwin',
        lastname : 'Rathnadas',
        Age:'56',
        gender:'Male'

    },
    

    {
        firstname:'Anne Christy',
        lastname : 'Selvi',
        Age:'54',
        gender:'Female'

    },
    

    {
        firstname:'Paulin',
        lastname : 'Priya',
        Age:'24',
        gender:'Female'

    },
    

    {
        firstname:'Allan',
        lastname : 'Jeyamithran',
        Age:'26',
        gender:'Male'

    },
    

    {
        firstname:'Steffi',
        lastname : 'Joy',
        Age:'30',
        gender:'Female'

    }
    

];

// console.log(users);

let Female=users.filter(function(user){
    return user.gender=='Female'
}).map(function(user){
    return user.firstname;
});

let Male=users.filter(function(user){
    return user.gender=='Male'
}).map(function(user){
    return user.firstname;
});


console.log(Female);
console.log(Male);


