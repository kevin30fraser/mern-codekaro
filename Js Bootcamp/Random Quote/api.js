const axios=require('axios');

let api=axios('https://type.fit/api/quotes');

api.then((dalta)=>{
    console.log(dalta.data)
}).catch(()=>{
    console.log('Failed')
});