const promise = new Promise(function(resolve, reject){
    resolve('Promise RESOLVE');
});

setTimeout(function(){
    console.log('tick')
},0);

promise.then((string) => {
    console.log(string);
    return Promise.resolve('New Promise resolve')
}, (error) => {
    console.log('REJECT: ', error);
}).then((value) => {
    console.log(value);
})