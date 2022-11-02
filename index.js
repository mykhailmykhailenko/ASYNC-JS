/// Promise
/*
Pending - очікування
Resolve - вирішений (успішний)
Reject - відхилений (неуспішний)
*/

const resultOfRequest = fetch('https://');
console.log(resultOfRequest);

resultOfRequest.then((responce)=>{
    console.log('promise ok')
}, (reject)=>{
    console.log(reject);
})