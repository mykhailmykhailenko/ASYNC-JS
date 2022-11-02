/// Promise
/*
Pending - очікування
Resolve - вирішений (успішний)
Reject - відхилений (неуспішний)
*/

// const resultOfRequest = fetch('./data.json');
// console.log(resultOfRequest);

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


// resultOfRequest
// .then((responce)=>{
//     console.log('promise ok');
//     return responce.json();
// }).then((successData) => {
//     console.log(successData);
// })
// .catch((reject)=>{
//     console.log(reject);
// })


/*
1. Встановити LiveServer
2. Створити json-файл
3. Зробити запит на json (піднявши index.html -> LiveServer)
4. Прийняти відповідь, розпарсити її як json та вивести на консоль
*/

const result = fetch('./data.json');
console.log(result)

result
.then((responce) => {
    console.log('promise ok')  
    return responce.json()  
}).then((successData) => {
    console.log(successData)
})
.catch ((reject) => {
    console.log(reject)
})