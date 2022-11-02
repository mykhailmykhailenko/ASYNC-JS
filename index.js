/// Promise
/*
Pending - очікування
Resolve - вирішений (успішний)
Reject - відхилений (неуспішний)
*/

const resultOfRequest = fetch('./data.json');
console.log(resultOfRequest);

// resultOfRequest.then((responce)=>{
//     console.log('promise ok');
//     return responce.json();
// }, (reject)=>{
//     console.log(reject);
// }).then((successData)=>{
//     console.log(successData)
// },(errorData)=>{
//     console.log(errorData);
// })


resultOfRequest
.then((responce)=>{
    console.log('promise ok');
    return responce.json();
}).then((successData) => {
    console.log(successData);
})
.catch((reject)=>{
    console.log(reject);
})