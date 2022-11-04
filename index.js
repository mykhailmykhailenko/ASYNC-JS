const prom = fetch('https://dummyjson.com/products/1');

prom
.then((data)=>{
    console.log('RESOLVE');
})
.catch((error)=>{
    console.log('REJECT');
})
.finally(()=>{
    console.log('But anyway, Im back');
})