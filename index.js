/// Promise
/*
Створення промісу
const promise = new Promise(executor);
executor = function
*/


// const promise = new Promise(function(resolve, reject){
//     /* if(it`s okay){
//          resolve()
//      } else {
//          reject()
//      }
//      */
// });

// ///////////////////

// promise.then(()=>{
//  ///resolve callback
// },()=>{
//  //reject callback
// })


/*
Створіть новий проміс, який буде викликати resolve, якщо 2+2 === 4
і reject,якщо ні.
Навісити обробники через then, які виведуть на консоль результат
*/

const promise = new Promise (function (resolve, reject) {
    if ((2+2) === 4) {
        resolve('TRUE')
    }else {
        reject('FALSE')
    }
});

promise.then((string)=>{
    console.log ('Resolve:', string)
},()=>{
    console.log ('Reject:', error)
});