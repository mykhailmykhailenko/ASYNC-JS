/// Promise
/*
Створення промісу
const promise = new Promise(executor);
executor = function
*/


const promise = new Promise(function(resolve, reject){
    /* if(it`s okay){
         resolve()
     } else {
         reject()
     }
     */
});

///////////////////

promise.then(()=>{
 ///resolve callback
},()=>{
 //reject callback
})